import { Metadata, ResolvingMetadata } from 'next';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import BlogDetail from '@/components/BlogDetail';
import { generateSEOMetadata } from '@/lib/seo-utils';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface Props {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

async function getBlog(slug: string) {
    await connectDB();
    // Try finding by exact match (could be encoded or not)
    let blog = await Blog.findOne({ slug }).lean();

    // If not found, try decoded
    if (!blog) {
        const decodedSlug = decodeURIComponent(slug);
        blog = await Blog.findOne({ slug: decodedSlug }).lean();
    }

    if (!blog) return null;
    return JSON.parse(JSON.stringify(blog));
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const blog = await getBlog(params.slug);

    if (!blog) {
        return {
            title: 'Not Found',
        };
    }

    // Use the stored metadata or generate it dynamically
    let title = blog.metaTitle || blog.title;
    let description = blog.metaDescription || blog.excerpt;
    let keywords = blog.metaKeywords;

    // Use manual SEO if provided
    if (blog.manualSEO) {
        if (blog.manualSEO.title) title = blog.manualSEO.title;
        if (blog.manualSEO.description) description = blog.manualSEO.description;
        if (blog.manualSEO.keywords && blog.manualSEO.keywords.length > 0) keywords = blog.manualSEO.keywords;
    }

    // Auto-generate if missing
    if (!title || !description) {
        const generated = generateSEOMetadata(blog.title, blog.content, blog.excerpt);
        if (!title) title = generated.metaTitle;
        if (!description) description = generated.metaDescription;
        if (!keywords || keywords.length === 0) keywords = generated.metaKeywords;
    }

    const previousImages = (await parent).openGraph?.images || [];
    const ogImage = blog.image ? [blog.image] : previousImages;

    return {
        title: `${title} | المحترف`,
        description: description,
        keywords: keywords,
        authors: [{ name: blog.author || 'Almohtaref' }],
        openGraph: {
            title: title,
            description: description,
            url: `https://almohtaref-sa.com/blog/${blog.slug}`,
            siteName: 'Almohtaref Concrete Cutting',
            images: ogImage,
            type: 'article',
            publishedTime: blog.createdAt,
            modifiedTime: blog.updatedAt,
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: ogImage,
        },
    };
}

export default async function Page({ params }: Props) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        notFound();
    }

    return <BlogDetail blog={blog} />;
}

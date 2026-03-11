import { Metadata } from 'next';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'المقالات والأخبار | المحترف لقص وتخريم الخرسانة',
  description: 'مقالات ونصائح حول قص وتخريم الخرسانة، أحدث التقنيات، ومشاريعنا في جدة ومكة والطائف.',
};

export const dynamic = 'force-dynamic';

async function getBlogs() {
  await connectDB();
  const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(blogs));
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-black text-white">
      <BlogList initialBlogs={blogs} />
      <Footer />
    </main>
  );
}

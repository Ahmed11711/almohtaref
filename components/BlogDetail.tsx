'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Blog {
    _id: string;
    title: string;
    content: string;
    processedContent?: string;
    excerpt: string;
    image: string;
    author: string;
    featured: boolean;
    slug: string;
    internalLinksApplied?: string[];
    createdAt: string;
    updatedAt: string;
    titleEn?: string;
    titleAr?: string;
    contentEn?: string;
    contentAr?: string;
    excerptEn?: string;
    excerptAr?: string;
}

interface BlogDetailProps {
    blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    const { language } = useLanguage();
    // Use state to track mount status to avoid hydration mismatch if needed, 
    // but suppressHydrationWarning is often cleaner for strict text/attribute mismatches.
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const displayTitle = (language === 'en' && blog.titleEn) ? blog.titleEn : (language === 'ar' && blog.titleAr) ? blog.titleAr : blog.title;
    const displayExcerpt = (language === 'en' && blog.excerptEn) ? blog.excerptEn : (language === 'ar' && blog.excerptAr) ? blog.excerptAr : blog.excerpt;
    const displayContent = (language === 'en' && blog.contentEn) ? blog.contentEn : ((language === 'ar' && blog.contentAr) ? blog.contentAr : (blog.processedContent || blog.content));

    return (
        <article className="min-h-screen bg-black text-white pt-32 pb-20 overflow-x-hidden w-full">
            {/* Hero Banner */}
            <div className="relative w-full h-[40vh] md:h-[60vh] max-h-[600px] mb-8 md:mb-12">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src={blog.image || '/placeholder-blog.jpg'}
                    alt={displayTitle}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        {blog.featured && (
                            <span className="inline-block bg-yellow-500 text-black px-3 py-1 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                                {language === 'ar' ? 'مميز' : 'Featured'}
                            </span>
                        )}
                        <h1
                            className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words"
                            suppressHydrationWarning
                        >
                            {displayTitle}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-gray-300 text-xs md:text-base">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                {blog.author}
                            </span>
                            <span>|</span>
                            <span suppressHydrationWarning>{formatDate(blog.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors p-2 -ml-2"
                    >
                        <span className={`text-xl ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>
                            {language === 'ar' ? '←' : '←'}
                        </span>
                        {language === 'ar' ? 'العودة للمقالات' : 'Back to Blog'}
                    </Link>
                </div>

                {/* Content */}
                <div className="bg-zinc-900/50 backdrop-blur rounded-2xl p-5 md:p-12 border border-zinc-800 overflow-x-auto min-w-0">
                    <div
                        className="text-lg md:text-2xl font-light text-gray-300 mb-8 md:mb-10 leading-relaxed border-l-4 border-yellow-500 pl-4 md:pl-6 italic break-words"
                        suppressHydrationWarning
                    >
                        {displayExcerpt}
                    </div>

                    <div
                        suppressHydrationWarning={true}
                        className="blog-content prose prose-invert md:prose-lg max-w-none w-full break-words
                prose-headings:text-white prose-p:text-gray-300 prose-a:text-yellow-500 hover:prose-a:text-yellow-400 
                prose-strong:text-white prose-li:text-gray-300 
                [&_.internal-link]:text-yellow-500 [&_.internal-link]:font-semibold [&_.internal-link]:no-underline hover:[&_.internal-link]:underline
                [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:mx-auto [&_img]:!max-w-full [&_img]:!h-auto
                [&_iframe]:!w-full [&_iframe]:!aspect-video [&_iframe]:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: displayContent }}
                    />
                </div>

                {/* Share / Tags (Placeholder) */}
                <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center">
                    <div className="text-gray-500 text-sm">
                        {language === 'ar' ? 'شارك المقال:' : 'Share this post:'}
                    </div>
                </div>
            </div>
        </article>
    );
}

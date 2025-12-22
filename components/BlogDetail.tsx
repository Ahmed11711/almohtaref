'use client';

import { useEffect } from 'react';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
}

interface BlogDetailProps {
    blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    const { language } = useLanguage();

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Fix for scroll position on mobile
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="min-h-screen bg-black text-white pt-24 pb-20">
            {/* Hero Banner */}
            <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[600px] mb-12">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src={blog.image || '/placeholder-blog.jpg'}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        {blog.featured && (
                            <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">
                                {language === 'ar' ? 'مميز' : 'Featured'}
                            </span>
                        )}
                        <h1
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                {blog.author}
                            </span>
                            <span>|</span>
                            <span>{formatDate(blog.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                        <span className={`text-xl ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>
                            {language === 'ar' ? '←' : '←'}
                        </span>
                        {language === 'ar' ? 'العودة للمقالات' : 'Back to Blog'}
                    </Link>
                </div>

                {/* Content */}
                <div className="bg-zinc-900/50 backdrop-blur rounded-2xl p-6 md:p-12 border border-zinc-800">
                    <div className="text-xl md:text-2xl font-light text-gray-300 mb-10 leading-relaxed border-l-4 border-yellow-500 pl-6 italic">
                        {blog.excerpt}
                    </div>

                    <div
                        suppressHydrationWarning={true}
                        className="prose prose-lg prose-invert max-w-none 
                prose-headings:text-white prose-p:text-gray-300 prose-a:text-yellow-500 hover:prose-a:text-yellow-400 
                prose-strong:text-white prose-li:text-gray-300 
                [&_.internal-link]:text-yellow-500 [&_.internal-link]:font-semibold [&_.internal-link]:no-underline hover:[&_.internal-link]:underline"
                        dangerouslySetInnerHTML={{ __html: blog.processedContent || blog.content }} // Use processedContent if available for internal links
                    />
                </div>

                {/* Internal Links Applied (for debugging - remove in production) */}
                {blog.internalLinksApplied && blog.internalLinksApplied.length > 0 && (
                    <div className="mt-8 p-6 bg-zinc-900/30 rounded-lg border border-zinc-800">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">Internal Links Applied (Debug):</h3>
                        <div className="flex flex-wrap gap-2">
                            {blog.internalLinksApplied.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-zinc-800 px-3 py-1 rounded-full text-sm text-gray-300 border border-zinc-700"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share / Tags (Placeholder) */}
                <div className="mt-12 pt-8 border-t border-zinc-800 flex justify-between items-center">
                    <div className="text-gray-500 text-sm">
                        {language === 'ar' ? 'شارك المقال:' : 'Share this post:'}
                        {/* Social icons can go here */}
                    </div>
                </div>
            </div>
        </article>
    );
}

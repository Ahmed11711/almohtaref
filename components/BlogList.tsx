'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Blog {
    _id: string;
    title: string;
    excerpt: string;
    content?: string;
    processedContent?: string;
    image: string;
    author: string;
    featured: boolean;
    slug: string;
    createdAt: string;
}

interface BlogListProps {
    initialBlogs: Blog[];
}

export default function BlogList({ initialBlogs }: BlogListProps) {
    const { t, language } = useLanguage();
    const [blogs] = useState<Blog[]>(initialBlogs);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="min-h-screen bg-black text-white pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 py-2 leading-tight"
                    >
                        {language === 'ar' ? 'المقالات والأخبار' : 'Blog & News'}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        {language === 'ar'
                            ? 'اكتشف أحدث المقالات والنصائح حول قص وتخريم الخرسانة ومعلومات تقنية تهمك'
                            : 'Discover the latest articles and tips about concrete cutting, coring, and technical insights'}
                    </motion.p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group"
                        >
                            <Link href={`/blog/${blog.slug}`} className="block h-full cursor-pointer">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={blog.image || '/placeholder-blog.jpg'}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {blog.featured && (
                                        <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full`}>
                                            {language === 'ar' ? 'مميز' : 'Featured'}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{formatDate(blog.createdAt)}</span>
                                        <span className="text-yellow-500">{blog.author}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                                        {blog.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                                        {blog.excerpt}
                                    </p>

                                    <div className="flex items-center text-yellow-500 text-sm font-medium">
                                        {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                                        <span className={`mx-2 transform ${language === 'ar' ? 'rotate-180' : ''}`}>→</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {blogs.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        {language === 'ar' ? 'لا توجد مقالات حالياً' : 'No posts available yet'}
                    </div>
                )}
            </div>
        </section>
    );
}

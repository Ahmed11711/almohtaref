import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Blog from '@/models/Blog';
import { uploadFile } from '@/lib/gridfs';

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
    } catch (error) {
        console.error('Database connection failed:', error);
        throw new Error('Database connection failed');
    }
};

export async function GET() {
    try {
        await connectDB();
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();

        let title, content, excerpt, author, featured, image;

        const contentType = request.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            const body = await request.json();
            title = body.title;
            content = body.content;
            excerpt = body.excerpt;
            author = body.author;
            featured = body.featured;
            image = body.image;
        } else {
            const formData = await request.formData();
            title = formData.get('title') as string;
            content = formData.get('content') as string;
            excerpt = formData.get('excerpt') as string;
            author = formData.get('author') as string;
            featured = formData.get('featured') === 'true';
            image = formData.get('image');
        }

        let imageUrl = '';

        if (image && typeof image === 'object' && 'name' in image) {
            // It's a file (only possible via FormData)
            const file = image as unknown as File;
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const fileId = await uploadFile(buffer, file.name, file.type);
            imageUrl = `/api/images/${fileId}`;
        } else if (typeof image === 'string') {
            imageUrl = image;
            // If it's a raw ID and not a path, prefix it
            if (imageUrl && !imageUrl.startsWith('/') && !imageUrl.startsWith('http')) {
                imageUrl = `/api/images/${imageUrl}`;
            }
        }

        // Generating a slug from title
        const slug = (title || '')
            .toLowerCase()
            .replace(/[^a-z0-9\u0600-\u06FF]+/g, '-') // Allow Arabic chars
            .replace(/^-+|-+$/g, '')
            || `blog-${Date.now()}`;

        const newBlog = new Blog({
            title,
            content,
            excerpt,
            author,
            featured: featured === true || featured === 'true',
            image: imageUrl,
            slug,
        });

        await newBlog.save();
        return NextResponse.json(newBlog, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }
}

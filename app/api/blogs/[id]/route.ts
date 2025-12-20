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

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const blog = await Blog.findById(params.id);
        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
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
            title = formData.get('title');
            content = formData.get('content');
            excerpt = formData.get('excerpt');
            author = formData.get('author');
            featured = formData.get('featured');
            image = formData.get('image');
        }

        const updateData: any = {
            title,
            content,
            excerpt,
            author,
            featured: featured === true || featured === 'true',
        };

        if (image && typeof image === 'object' && 'name' in image) {
            const file = image as unknown as File;
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const fileId = await uploadFile(buffer, file.name, file.type);
            updateData.image = `/api/images/${fileId}`;
        } else if (typeof image === 'string') {
            // If it's a raw ID and not a path, prefix it
            if (image && !image.startsWith('/') && !image.startsWith('http')) {
                updateData.image = `/api/images/${image}`;
            } else {
                updateData.image = image;
            }
        }

        // Remove undefined fields
        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

        const blog = await Blog.findByIdAndUpdate(params.id, updateData, { new: true });
        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error) {
        console.error('Error updating blog:', error);
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const blog = await Blog.findByIdAndDelete(params.id);
        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}

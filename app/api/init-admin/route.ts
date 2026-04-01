import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
export const dynamic = 'force-dynamic';
export async function GET() {
  await connectDB();
  // الموديل بيشفر الباسورد أوتوماتيك لو استخدمت .save() أو .create()
  await Admin.create({ username: 'admin', password: 'admin123' });
  return NextResponse.json({ message: "Admin Created and Hashed!" });
}
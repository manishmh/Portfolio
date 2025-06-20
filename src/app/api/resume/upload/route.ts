import pool from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check if this is a valid upload request by checking for form data
    const formData = await request.formData();
    const file = formData.get('resume') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Please upload PDF, DOC, or DOCX files only.' }, { status: 400 });
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Get file details
    const filename = file.name;
    const contentType = file.type;
    const fileSize = file.size;

    // Insert into database
    const client = await pool.connect();
    try {
      const result = await client.query(
        'INSERT INTO resumes (filename, original_name, content_type, file_size, file_data, uploaded_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING id',
        [filename, filename, contentType, fileSize, buffer]
      );

      return NextResponse.json({ 
        success: true, 
        message: 'Resume uploaded successfully',
        id: result.rows[0].id 
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
} 
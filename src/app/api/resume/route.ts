import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      // Get the latest resume
      const result = await client.query(
        'SELECT id, filename, original_name, content_type, file_size, file_data, uploaded_at FROM resumes ORDER BY uploaded_at DESC LIMIT 1'
      );

      if (result.rows.length === 0) {
        return NextResponse.json({ error: 'No resume found' }, { status: 404 });
      }

      const resume = result.rows[0];
      
      // Return file as response
      return new NextResponse(resume.file_data, {
        headers: {
          'Content-Type': resume.content_type,
          'Content-Disposition': `inline; filename="${resume.original_name}"`,
          'Content-Length': resume.file_size.toString(),
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Resume fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 });
  }
} 
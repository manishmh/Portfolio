# Portfolio with Resume Upload

A modern portfolio website built with Next.js 15, featuring a resume upload and management system using Neon PostgreSQL database.

## Features

- **Modern Portfolio Design**: Clean, responsive design with animations
- **Resume Management**: Upload and display resume with admin authentication
- **Password Protected Admin**: Secure admin panel for resume uploads
- **Database Integration**: PostgreSQL (Neon) for file storage
- **Vercel Deployment Ready**: Optimized for Vercel hosting

## Routes

- `/` - Main portfolio page
- `/resume` - Public resume viewing page
- `/admin` - Password-protected admin panel for resume uploads

## Setup Instructions

### 1. Environment Setup

Create a `.env.local` file in the root directory:

```env
DATABASE_URL=postgresql://neondb_owner:npg_3aGhEWine0pd@ep-bold-haze-a1tpxdh2-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
ADMIN_PASSWORD=your_secure_password_here
```

**Important**: Change `your_secure_password_here` to a strong password of your choice.

### 2. Database Setup

Your Neon database should already have the `resumes` table. If not, run this SQL schema:

```sql
CREATE TABLE IF NOT EXISTS resumes (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    content_type VARCHAR(100) NOT NULL,
    file_size INTEGER NOT NULL,
    file_data BYTEA NOT NULL,
    uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_resumes_uploaded_at ON resumes(uploaded_at DESC);
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## Usage

### Admin Panel

1. Navigate to `/admin`
2. Enter your admin password (set in `.env.local`)
3. Upload a resume file (PDF, DOC, or DOCX, max 10MB)
4. View uploaded resume at `/resume`

### Resume Display

- The `/resume` route displays the most recently uploaded resume
- Users can view the resume inline or download it
- If no resume is uploaded, a "No resume found" message is displayed

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `ADMIN_PASSWORD`
4. Deploy!

## Security Features

- Password-protected admin access
- Cookie-based authentication
- File type validation (PDF, DOC, DOCX only)
- File size limits (10MB maximum)
- SQL injection protection with parameterized queries

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Database**: PostgreSQL (Neon)
- **Authentication**: Cookie-based sessions
- **File Handling**: Native FormData and Buffer
- **Deployment**: Vercel-optimized

## File Structure

```
src/
├── app/
│   ├── admin/page.tsx          # Admin panel
│   ├── resume/page.tsx         # Resume display
│   ├── api/
│   │   ├── auth/route.ts       # Authentication
│   │   └── resume/
│   │       ├── route.ts        # Resume retrieval
│   │       └── upload/route.ts # Resume upload
│   └── layout.tsx
├── components/                 # UI components
├── data/index.ts              # Navigation and content data
├── lib/
│   ├── db.ts                  # Database connection
│   └── utils.ts               # Utilities
└── middleware.ts              # Auth middleware
```

## Removed Cloudflare Dependencies

This project has been migrated from Cloudflare to Vercel deployment:

- Removed `wrangler.jsonc`
- Removed `open-next.config.ts`
- Removed `@opennextjs/cloudflare` dependency
- Updated build scripts for Vercel

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

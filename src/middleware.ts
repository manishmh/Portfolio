import { NextResponse } from 'next/server';

export function middleware() {
  // No authentication middleware needed since we're doing password check on each visit
  return NextResponse.next();
}

export const config = {
  matcher: [],
}; 
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const subscription = await request.json();
  
  // In production, you would save this subscription to a database
  console.log('New push subscription:', subscription);
  
  return NextResponse.json({ success: true });
}

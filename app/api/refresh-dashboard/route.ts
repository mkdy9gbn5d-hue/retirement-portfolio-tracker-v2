import { NextResponse } from 'next/server';

export async function GET() {
  // This route will be called automatically by Vercel Cron every day at 5:30 AM PST
  console.log('Refreshing dashboard data...');
  
  // TODO: Add logic to refresh Truthify data, update Notion, etc.
  
  return NextResponse.json({ 
    success: true, 
    message: 'Dashboard refreshed at ' + new Date().toISOString() 
  });
}

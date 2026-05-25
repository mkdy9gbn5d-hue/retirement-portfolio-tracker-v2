import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Replace this with real Truthify API call
    console.log('🔄 Refreshing dashboard data from Truthify...');
    
    // For now, just log that it ran
    const refreshTime = new Date().toISOString();
    
    return NextResponse.json({
      success: true,
      message: `Dashboard refreshed at ${refreshTime}`,
      nextRun: 'Tomorrow at 5:30 AM PST'
    });
    
  } catch (error) {
    console.error('Cron job failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to refresh dashboard' },
      { status: 500 }
    );
  }
}

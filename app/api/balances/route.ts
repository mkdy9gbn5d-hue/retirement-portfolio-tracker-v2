import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Replace with real Truthify API call
  // For now returning mock data
  return NextResponse.json({
    eric: 302085,
    bridget: 164423,
    jensen: 21932,
    lastUpdated: new Date().toISOString(),
  });
}

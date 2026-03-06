import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const plate = searchParams.get('plate');
    const state = searchParams.get('state');

    const cleanPlate = plate?.replace(/\s/g, '') || '';
    if (!cleanPlate || !state) {
      return NextResponse.json(
        { error: 'Missing required parameters: plate and state' },
        { status: 400 }
      );
    }

    const apiKey = process.env.AUTOGRAB_API_KEY;
    if (!apiKey) {
      console.error('AUTOGRAB_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Vehicle lookup service is not configured' },
        { status: 500 }
      );
    }

    const url = new URL(
      `https://api.autograb.com.au/v2/vehicles/registrations/${encodeURIComponent(cleanPlate)}`
    );
    url.searchParams.set('state', state);
    url.searchParams.set('region', 'au');

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'ApiKey': apiKey,
        'Accept': 'application/json',
      },
    });


    if (!response.ok) {
      const errorText = await response.text();
      console.error('AutoGrab API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Vehicle lookup failed' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('AutoGrab lookup error:', error);
    return NextResponse.json(
      { error: 'Vehicle lookup service unavailable' },
      { status: 500 }
    );
  }
}

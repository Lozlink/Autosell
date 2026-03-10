import { NextRequest, NextResponse } from 'next/server';
import { sendMessage } from '@/lib/twilioClient';

export async function POST(request: NextRequest) {
  try {
    const { phone, message, platform = 'sms' } = await request.json();
    
    if (!phone || !message) {
      return NextResponse.json({ error: 'Phone number and message are required' }, { status: 400 });
    }

    // Validate platform
    if (!['sms', 'whatsapp'].includes(platform)) {
      return NextResponse.json({ error: 'Platform must be sms or whatsapp' }, { status: 400 });
    }

    // Send the message
    await sendMessage({
      to: phone,
      body: message
    }, platform as 'sms' | 'whatsapp');

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

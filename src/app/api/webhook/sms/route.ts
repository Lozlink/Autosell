import { NextRequest, NextResponse } from 'next/server';
import { analyzeMessage, sendMessage } from '@/lib/twilioClient';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const from = formData.get('From') as string;
    const body = formData.get('Body') as string;
    const messageSid = formData.get('MessageSid') as string;
    
    if (!from || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Clean phone number (remove +1, +61, etc.)
    const cleanFrom = from.replace(/^\+/, '');
    
    // Analyze the incoming message
    const response = analyzeMessage(body);
    
    // Log the conversation
    await supabase.from('conversations').insert({
      phone_number: cleanFrom,
      message_sid: messageSid,
      incoming_message: body,
      outgoing_message: response.message,
      should_escalate: response.shouldEscalate,
      platform: 'sms',
      created_at: new Date().toISOString()
    });

    // Send automated response
    await sendMessage({
      to: from,
      body: response.message
    }, 'sms');

    // If escalation is needed, create a lead for human follow-up
    if (response.shouldEscalate) {
      await supabase.from('leads').insert({
        name: 'SMS Lead',
        email: `${cleanFrom}@sms.lead`,
        phone: cleanFrom,
        enquiry_type: 'chatbot_escalation',
        message: `SMS conversation escalated. Last message: "${body}"`,
        created_at: new Date().toISOString()
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SMS webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

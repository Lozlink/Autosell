-- Create conversations table for chatbot interactions
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone_number VARCHAR(20) NOT NULL,
  message_sid VARCHAR(100) UNIQUE,
  incoming_message TEXT,
  outgoing_message TEXT,
  should_escalate BOOLEAN DEFAULT FALSE,
  platform VARCHAR(20) NOT NULL CHECK (platform IN ('sms', 'whatsapp')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for phone number lookups
CREATE INDEX IF NOT EXISTS idx_conversations_phone_number ON conversations(phone_number);

-- Create index for platform filtering
CREATE INDEX IF NOT EXISTS idx_conversations_platform ON conversations(platform);

-- Create index for escalation filtering
CREATE INDEX IF NOT EXISTS idx_conversations_escalation ON conversations(should_escalate);

-- Create index for date filtering
CREATE INDEX IF NOT EXISTS idx_conversations_created_at ON conversations(created_at);

-- Add RLS policies
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

-- Policy for service role access
CREATE POLICY "Service role can manage conversations" ON conversations
  FOR ALL USING (auth.role() = 'service_role');

-- Policy for authenticated users to read their own conversations
CREATE POLICY "Users can read conversations" ON conversations
  FOR SELECT USING (auth.role() = 'authenticated');

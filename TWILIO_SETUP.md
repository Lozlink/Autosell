# Twilio SMS & WhatsApp Integration Setup

This guide will help you set up Twilio integration for SMS and WhatsApp messaging with automated chatbot responses.

## Prerequisites

1. Twilio Account (sign up at https://www.twilio.com)
2. Phone number with SMS capabilities
3. WhatsApp Business Account (optional, for WhatsApp integration)

## Step 1: Twilio Account Setup

1. Create a Twilio account at https://www.twilio.com
2. Verify your phone number
3. Purchase a phone number with SMS capabilities
4. Note down your Account SID and Auth Token from the Twilio Console

## Step 2: Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_SMS_NUMBER=your_twilio_sms_number
TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number
```

## Step 3: Database Setup

Run the Supabase migration to create the conversations table:

```sql
-- The migration file is already created at: supabase/migrations/001_create_conversations_table.sql
-- Run this in your Supabase SQL editor or via CLI
```

## Step 4: Webhook Configuration

### SMS Webhook Setup

1. In your Twilio Console, go to Phone Numbers > Manage > Active Numbers
2. Click on your SMS-enabled phone number
3. In the "Messaging" section, set the webhook URL to:
   ```
   https://yourdomain.com/api/webhook/sms
   ```
4. Set HTTP method to `POST`
5. Save the configuration

### WhatsApp Webhook Setup (Optional)

1. In Twilio Console, go to Messaging > Try it out > Send a WhatsApp message
2. Follow the setup wizard to connect your WhatsApp Business Account
3. Set the webhook URL to:
   ```
   https://yourdomain.com/api/webhook/whatsapp
   ```
4. Set HTTP method to `POST`

## Step 5: Test the Integration

### Test SMS

Send an SMS to your Twilio number with messages like:
- "Hello" - Should trigger greeting response
- "I want a quote" - Should trigger valuation response
- "How much does it cost?" - Should trigger pricing response
- "I want to speak to someone" - Should trigger escalation

### Test WhatsApp

Send a WhatsApp message to your Twilio WhatsApp number with the same test messages.

## Automated Responses

The chatbot automatically responds to these types of messages:

### 1. Greeting
**Keywords:** hello, hi, hey, start, help
**Response:** Welcome message with available options

### 2. Valuation Request
**Keywords:** quote, valuation, price, value, worth, how much
**Response:** Asks for car details to provide valuation

### 3. Pricing Questions
**Keywords:** pricing, fees, cost, charge, free, commission
**Response:** Explains free service with no hidden costs

### 4. Inspection Requests
**Keywords:** inspection, visit, come, when, schedule, booking
**Response:** Explains inspection process and asks for location

### 5. Payment Questions
**Keywords:** payment, pay, money, osko, bank, transfer, when
**Response:** Explains same-day OSKO payment process

### 6. Condition Questions
**Keywords:** damaged, broken, not running, accident, wreck, condition
**Response:** Explains we buy cars in any condition

### 7. Escalation Requests
**Keywords:** speak, human, manager, complaint, problem, issue, complex
**Response:** Connects to human agent and creates lead

## Database Schema

The system logs all conversations in the `conversations` table:

```sql
CREATE TABLE conversations (
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
```

## API Endpoints

### Webhook Endpoints (Twilio calls these)
- `POST /api/webhook/sms` - Handles incoming SMS messages
- `POST /api/webhook/whatsapp` - Handles incoming WhatsApp messages

### Management Endpoints
- `POST /api/send-message` - Send messages programmatically

## Monitoring and Analytics

1. **Twilio Console**: Monitor message delivery, costs, and errors
2. **Supabase Dashboard**: View conversation logs and escalation data
3. **Application Logs**: Check server logs for webhook processing

## Troubleshooting

### Common Issues

1. **Webhook not receiving messages**
   - Check webhook URL is correct and accessible
   - Verify HTTPS is enabled (Twilio requires HTTPS)
   - Check server logs for errors

2. **Messages not sending**
   - Verify Twilio credentials are correct
   - Check phone number format (include country code)
   - Ensure sufficient Twilio account balance

3. **Database errors**
   - Verify Supabase connection
   - Check RLS policies
   - Ensure service role key has proper permissions

### Testing Commands

```bash
# Test webhook locally with ngrok
ngrok http 3000

# Test API endpoint
curl -X POST http://localhost:3000/api/send-message \
  -H "Content-Type: application/json" \
  -d '{"phone": "+1234567890", "message": "Test message", "platform": "sms"}'
```

## Security Considerations

1. **Webhook Validation**: Consider implementing Twilio signature validation
2. **Rate Limiting**: Implement rate limiting for webhook endpoints
3. **Data Privacy**: Ensure conversation data is handled according to privacy laws
4. **Access Control**: Use proper RLS policies in Supabase

## Cost Optimization

1. **Message Length**: Keep automated responses concise
2. **Escalation Logic**: Only escalate when necessary to avoid unnecessary human intervention
3. **Caching**: Consider caching common responses
4. **Analytics**: Monitor usage patterns to optimize response logic

## Next Steps

1. Customize automated responses for your business needs
2. Add more sophisticated NLP for better message understanding
3. Implement conversation state management for multi-turn conversations
4. Add integration with your CRM system for lead management
5. Set up monitoring and alerting for system health

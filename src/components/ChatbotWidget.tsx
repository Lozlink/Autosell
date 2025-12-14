'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Add welcome message when widget opens
    if (isOpen && messages.length === 0) {
      addMessage("Hi! I'm Auto-Sell.ai's assistant. How can I help you today?", false)
    }
  }, [isOpen, messages.length])

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage = inputText.trim()
    addMessage(userMessage, true)
    setInputText('')
    setIsTyping(true)

    try {

      const demo = true
      if (demo) {
        setTimeout(() => {
          const botResponse = getBotResponse(userMessage)
          addMessage(botResponse, false)
          setIsTyping(false)
        }, 600)
      } else {
        // Send to our API endpoint
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: 'demo', // Demo mode
            message: userMessage,
            platform: 'sms'
          })
        })

        if (response.ok) {
          // Simulate bot response (in real implementation, this would come from webhook)
          setTimeout(() => {
            const botResponse = getBotResponse(userMessage)
            addMessage(botResponse, false)
            setIsTyping(false)
          }, 1000)
        } else {
          addMessage("Sorry, I'm having trouble connecting. Please try again later.", false)
          setIsTyping(false)
        }
      }
    } catch {
      addMessage("Sorry, I'm having trouble connecting. Please try again later.", false)
      setIsTyping(false)
    }

  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hi! I'm here to help with your car selling needs. I can assist with getting a free valuation, explaining our pricing, or answering any questions you have. What would you like to know?"
    }
    
    if (message.includes('quote') || message.includes('valuation') || message.includes('price')) {
      return "Great! I can help you get a free car valuation. To get started, I'll need your car's make, model, year, odometer reading, and general condition. Would you like to provide these details, or would you prefer to fill out our online form?"
    }
    
    if (message.includes('cost') || message.includes('fee') || message.includes('charge')) {
      return "Our service is completely FREE! ✅ No fees or commissions ✅ No hidden costs ✅ Free pickup anywhere in Australia ✅ Same-day payment via OSKO. We make money by reselling your car, not by charging you!"
    }
    
    if (message.includes('inspection') || message.includes('visit') || message.includes('come')) {
      return "We can inspect your car at your convenience! We're available 7 days a week and come to you anywhere in Australia. Usually within 24-48 hours and takes about 30 minutes. What's your postcode?"
    }
    
    if (message.includes('damaged') || message.includes('broken') || message.includes('not running')) {
      return "We buy cars in ANY condition! 🚗 Running or not, accident damage, mechanical issues, high mileage - no car is too damaged for us. We'll give you a fair price based on what we can salvage. Ready for a quote?"
    }
    
    if (message.includes('human') || message.includes('speak') || message.includes('manager')) {
      return "I understand you'd like to speak with someone. Let me connect you with our team! One of our car buying specialists will call you within 15 minutes. What's your name and phone number?"
    }
    
    return "I'm here to help with your car selling needs! I can assist with getting a free valuation, explaining our pricing, booking an inspection, or answering questions. What would you like to know?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-gray-800 p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}

      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>


      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white border border-blue-300 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-400 text-gray-800 p-4 rounded-t-lg flex items-center justify-between">
              <div>
                <h3 className="font-bold">Auto-Sell.ai Assistant</h3>
                <p className="text-sm opacity-90">Online now</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-gray-800'
                        : 'bg-blue-300 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-blue-200 text-gray-800 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-blue-300">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyUp={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-blue-200 border border-zinc-600 rounded-lg text-gray-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="bg-blue-600 text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

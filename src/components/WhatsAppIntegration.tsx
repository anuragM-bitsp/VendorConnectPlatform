import React, { useState } from 'react';
import { MessageCircle, Phone, Send, User, Clock, CheckCheck } from 'lucide-react';

interface WhatsAppMessage {
  id: string;
  sender: 'vendor' | 'supplier';
  message: string;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
}

interface WhatsAppIntegrationProps {
  supplierName: string;
  supplierPhone: string;
  orderId?: string;
  onClose: () => void;
}

export function WhatsAppIntegration({ supplierName, supplierPhone, orderId, onClose }: WhatsAppIntegrationProps) {
  const [messages, setMessages] = useState<WhatsAppMessage[]>([
    {
      id: '1',
      sender: 'supplier',
      message: `Hello! I'm ${supplierName}. How can I help you today?`,
      timestamp: Date.now() - 300000,
      status: 'read'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickMessages = [
    'What is the current price?',
    'Is the item available?',
    'When can you deliver?',
    'Can you provide bulk discount?',
    'What is the minimum order quantity?',
    'Send me quality certificate'
  ];

  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    const newMsg: WhatsAppMessage = {
      id: Date.now().toString(),
      sender: 'vendor',
      message: message.trim(),
      timestamp: Date.now(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');

    // Simulate supplier typing and response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: WhatsAppMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'supplier',
        message: getAutoResponse(message),
        timestamp: Date.now(),
        status: 'delivered'
      };
      setMessages(prev => [...prev, response]);
    }, 2000);

    // Update message status
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);
  };

  const getAutoResponse = (message: string): string => {
    const msg = message.toLowerCase();
    if (msg.includes('price')) return 'Current price is ₹25/kg. Bulk orders get 10% discount.';
    if (msg.includes('available')) return 'Yes, we have fresh stock available. 500kg in inventory.';
    if (msg.includes('deliver')) return 'We can deliver within 2-4 hours in Delhi NCR.';
    if (msg.includes('discount')) return 'For orders above ₹2000, we offer 10% discount. Above ₹5000 gets 15% off.';
    if (msg.includes('minimum')) return 'Minimum order is 10kg. No minimum for regular customers.';
    if (msg.includes('certificate')) return 'I\'ll send the quality certificate and lab reports right away.';
    return 'Thank you for your message. Let me check and get back to you shortly.';
  };

  const openWhatsAppDirect = () => {
    const message = orderId 
      ? `Hi ${supplierName}, I'm interested in placing an order (Order ID: ${orderId}). Please share current prices and availability.`
      : `Hi ${supplierName}, I'm interested in your products. Please share current prices and availability.`;
    
    const whatsappUrl = `https://wa.me/${supplierPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl max-w-md w-full h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-green-600 p-4 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">{supplierName}</h3>
              <p className="text-green-100 text-sm">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={openWhatsAppDirect}
              className="text-white hover:text-green-200 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="text-white hover:text-green-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === 'vendor'
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.message}</p>
                <div className={`flex items-center justify-end space-x-1 mt-1 ${
                  message.sender === 'vendor' ? 'text-green-100' : 'text-gray-500'
                }`}>
                  <span className="text-xs">{formatTime(message.timestamp)}</span>
                  {message.sender === 'vendor' && (
                    <CheckCheck className={`h-3 w-3 ${
                      message.status === 'read' ? 'text-blue-300' : 'text-green-200'
                    }`} />
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">typing...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Messages */}
        <div className="p-3 border-t border-gray-600">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickMessages.slice(0, 3).map((msg, index) => (
              <button
                key={index}
                onClick={() => sendMessage(msg)}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-gray-600 transition-colors"
              >
                {msg}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-600">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(newMessage)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={() => sendMessage(newMessage)}
              disabled={!newMessage.trim()}
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          
          <button
            onClick={openWhatsAppDirect}
            className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Continue in WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
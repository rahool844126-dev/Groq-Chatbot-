'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { User, Bot } from 'lucide-react';

export default function MessageBubble({ message, isLast }) {
  const isUser = message.role === 'user';
  
  return (
    <motion.div 
      className={`message-wrapper ${isUser ? 'user' : 'assistant'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <div className="message-avatar">
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      
      <div className={`message-bubble ${message.error ? 'error' : ''}`}>
        <ReactMarkdown>{message.content}</ReactMarkdown>
      </div>
    </motion.div>
  );
}

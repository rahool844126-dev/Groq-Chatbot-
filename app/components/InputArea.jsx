'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Square, Mic, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InputArea({ onSendMessage, isLoading, onStop }) {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-area">
      <div className="input-container">
        <button 
          type="button"
          className="attach-button"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </button>
        
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="message-input"
          rows={1}
          disabled={isLoading}
        />
        
        <div className="input-actions">
          {isLoading ? (
            <motion.button
              type="button"
              onClick={onStop}
              className="stop-button"
              whileTap={{ scale: 0.95 }}
            >
              <Square size={20} />
            </motion.button>
          ) : (
            <>
              <motion.button
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`voice-button ${isRecording ? 'recording' : ''}`}
                whileTap={{ scale: 0.95 }}
              >
                <Mic size={20} />
              </motion.button>
              
              <motion.button
                type="submit"
                disabled={!input.trim()}
                className="send-button"
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import './styles.css';
import { Message } from '../types/types';

interface ChatWindowProps {
  messages: Message[];
  onClose: () => void;
  question: string;
  onQuestionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onClose,
  question,
  onQuestionChange,
  onSubmit
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll when messages change

  return (
    <div className="chat-window">
      <div className="chat-window-header">
        <h3 className="chat-window-title">Chat Support</h3>
        <button 
          onClick={onClose}
          className="chat-window-close"
        >
          ✕
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
            <ChatMessage key={index} type={msg.type} text={msg.text} contentType={msg.contentType} />
        ))}
        <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
      </div>

      <ChatInput
        value={question}
        onChange={onQuestionChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}; 
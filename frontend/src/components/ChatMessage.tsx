import React from 'react';
import './styles.css';

interface ChatMessageProps {
  type: 'question' | 'answer' | 'loading';
  text: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ type, text }) => {
  return (
    <div className={`chat-message ${type}`}>
      {text}
    </div>
  );
}; 
import React from 'react';
import './styles.css';
import { TokenType } from '../types/types';

interface ChatMessageProps {
  type: 'question' | 'answer';
  text: string;
  contentType?: TokenType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ type, text }) => {
  return (
    <div className={`chat-message ${type}`}>
      {text}
    </div>
  );
}; 
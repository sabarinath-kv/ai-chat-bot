import React from 'react';
import './styles.css';
import { Message } from '../types/types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`chat-message ${message.type}`}>
      {message.content}
    </div>
  );
}; 
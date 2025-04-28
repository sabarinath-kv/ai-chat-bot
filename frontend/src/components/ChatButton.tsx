import React from 'react';
import './styles.css';

interface ChatButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isVisible }) => {
  return (
    <button 
      onClick={onClick}
      className={`chat-button ${!isVisible ? 'hidden' : ''}`}
    >
      💬
    </button>
  );
}; 
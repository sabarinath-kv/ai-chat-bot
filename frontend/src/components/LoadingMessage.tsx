import React from 'react';
import './styles.css';

export const LoadingMessage: React.FC = () => {
  return (
    <div className="chat-message loading">
      Typing
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}; 
import React from 'react';
import './styles.css';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="chat-input-form">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type your question..."
        className="chat-input"
      />
      <button type="submit" className="chat-input-submit">
        Send
      </button>
    </form>
  );
}; 
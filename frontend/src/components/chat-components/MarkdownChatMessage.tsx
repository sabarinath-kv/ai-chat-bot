import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles.css";

interface MarkdownChatMessageProps {
  type: "question" | "answer" | "loading";
  text: string;
}

export const MarkdownChatMessage: React.FC<MarkdownChatMessageProps> = ({
  type,
  text,
}) => {
  return (
    <div className={`chat-message ${type}`}>
      <div className="markdown-content">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export type TokenType = 'markdown_token' | 'json_token'

export interface Message {
    type: 'question' | 'answer';
    content: string;
    contentType?: TokenType;
  }

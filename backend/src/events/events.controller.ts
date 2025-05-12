import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  private markdownMessage =
    'Hello, **Welcome to Keyvalue store**. I am ***Keybot***, how can I help you?';

  private jsonData = [
    {
      id: 1,
      name: 'Laptop',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      description: 'Powerful laptop for work and entertainment with long battery life.',
    },
    {
      id: 2,
      name: '"Wireless Headphones"',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      price: 199.99,
      description: 'Premium wireless headphones with noise cancellation and exceptional sound quality.',
    },
    { 
      id: 3,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      name: 'Smart Watch',
      price: 299.99,
      description: 'Feature-rich smartwatch with health tracking and notifications.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      name: 'Smartphone',
      price: 799.99,
      description: 'Latest smartphone with advanced camera system and 5G capability.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
      name: 'Tablet',
      price: 499.99,
      description: 'Versatile tablet perfect for creativity and productivity.',
    },
  ];

  private detailsData = {
    id: 1,
    name: 'Laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    price: 1299.99,
    description: 'Powerful laptop for work and entertainment with long battery life.',
  };

  private markdownClient: Response | null = null;
  private jsonClient: Response | null = null;

  @Post('stream')
  handleStreamRequest(@Req() req: Request, @Res() res: Response) {
    const { content } = req.body;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    if (content.toLowerCase() === 'hello') {
      this.markdownClient = res;
      this.streamMarkdown();
    } else if (content.toLowerCase().includes('details')) {
      this.jsonClient = res;
      this.streamJson(this.detailsData);
    } else {
      this.jsonClient = res;
      this.streamJson(this.jsonData);
    }
  }

  private streamMarkdown() {
    if (!this.markdownClient) return;

    let index = 0;
    const intervalId = setInterval(() => {
      if (index >= this.markdownMessage.length) {
        this.markdownClient?.end();
        clearInterval(intervalId);
        return;
      }

      const chunkSize = Math.floor(Math.random() * 10) + 5;
      const chunk = this.markdownMessage.slice(index, index + chunkSize);
      index += chunkSize;

      this.markdownClient?.write(
        `data: ${JSON.stringify({ type: 'markdown_token', content: chunk })}\n\n`,
      );
    }, 500);
  }

  private streamJson(data: any) {
    if (!this.jsonClient) return;

    const jsonString = JSON.stringify(data);
    let index = 0;
    const intervalId = setInterval(() => {
      if (index >= jsonString.length) {
        this.jsonClient?.end();
        clearInterval(intervalId);
        return;
      }

      const chunkSize = Math.floor(Math.random() * 10) + 5;
      const chunk = jsonString.slice(index, index + chunkSize);
      index += chunkSize;

      this.jsonClient?.write(
        `data: ${JSON.stringify({ type: 'json_token', content: chunk })}\n\n`,
      );
    }, 500);
  }
}

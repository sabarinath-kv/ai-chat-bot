import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  private markdownMessage =
    'Hello, **Welcome to Keyvalue store**. I am ***Keybot***, how can I help you?';

  private jsonData = [
    {
      id: 1,
      image: 'src/assets/laptop.jpeg',
      name: 'Laptop',
      price: '₹55,000',
    },
    {
      id: 2,
      image: 'src/assets/stand.jpg',
      name: 'Laptop Stand',
      price: '₹1,200',
    },
    { id: 3, image: 'src/assets/bag.jpeg', name: 'Bag', price: '₹1,800' },
    {
      id: 4,
      image: 'src/assets/mouse.jpeg',
      name: 'Wireless Mouse',
      price: '₹999',
    },
    {
      id: 5,
      image: 'src/assets/keyboard.jpg',
      name: 'Keyboard',
      price: '₹2,500',
    },
  ];

  private detailsData = {
    image: 'src/assets/laptop-video.mp4',
    id: 1,
    name: 'Laptop',
    price: '₹50,000',
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
      this.streamJson(this.detailsData, true);
    } else {
      this.jsonClient = res;
      this.streamJson(this.jsonData, false);
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

  private streamJson(data: any, isJsonVideo: boolean) {
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
        `data: ${JSON.stringify({ type: isJsonVideo ? 'video_json_token' : 'json_token', content: chunk })}\n\n`,
      );
    }, 500);
  }
}

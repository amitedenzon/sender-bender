import { Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
  @Get('/all')
  findAll() {
    return 'all notifications';
  }

  @Post()
  create() {
    return 'new notification';
  }

  @Get('/notify')
  async notify() {
    return this.notificationService.notify();
  }
}

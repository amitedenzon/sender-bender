import { Controller, Get, Post } from '@nestjs/common';

@Controller('notification')
export class NotificationController {
    @Get()
    findAll(){
        return 'all notifications';
    }

    @Post() 
    create() {
        return 'new notification';
    }
}

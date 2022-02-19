import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('secret')
  async getSecret(): Promise<string> {
    return await this.appService.getSecret();
  }
}

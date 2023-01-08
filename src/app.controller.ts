import { Controller, Get } from '@nestjs/common';
import { NodeMailerService } from './mail/nodemailer.service';

@Controller()
export class AppController {
  constructor(private readonly mail: NodeMailerService) {}
  @Get()
  async sendEmailWithNodeMailer() {
    await this.mail.send({
      to: '',
      subject: '',
      html: ''
    });
  }
}

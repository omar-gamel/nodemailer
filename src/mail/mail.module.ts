import { Module, Global } from '@nestjs/common';
import { MailService } from './mail.service';
import { NodeMailerService } from './nodemailer.service';

@Global()
@Module({
  imports: [],
  providers: [
    MailService,
    NodeMailerService
  ],
  exports: [MailService]
})
export class MailModule {}

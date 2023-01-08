import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MailModule } from './mail/mail.module';
import { NodeMailerService } from './mail/nodemailer.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MailModule],
  controllers: [AppController],
  providers: [NodeMailerService]
})
export class AppModule {}

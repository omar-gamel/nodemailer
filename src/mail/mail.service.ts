import { Injectable } from '@nestjs/common';
import { IMailService, MailDetails } from './mail.type';
import { NodeMailerService } from './nodemailer.service';

@Injectable()
export class MailService implements IMailService {
  private mailService: IMailService;

  constructor(private nodeMailerService: NodeMailerService) {
    this.mailService = this.nodeMailerService;
  }

  public async send(input: MailDetails) {
    await this.mailService.send(input);
  }
}

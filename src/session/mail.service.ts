import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import {environments} from "../environments/environments";

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}

  async sentNewPassword(to: string, password: string): Promise<void> {
    await this.mailService.sendMail({
      from: environments.email.sender,
      to: to,
      subject: `[SOTRAG] Nouveau mot de passe pour le site`,
      text: `Bonjour,\n\nVotre nouveau mot de passe est ${password}.\n\nCordialement,\nSOTRAG`,
    });
  }
}

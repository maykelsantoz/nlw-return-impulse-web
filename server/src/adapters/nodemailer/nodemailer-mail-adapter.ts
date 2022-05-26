import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "533d045056aa6e",
    pass: "17ad9efa8d6e01"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({  subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Maykel Santos <maykelsantoz@gmail.com>',
      subject,
      html: body,
    });
  };
}
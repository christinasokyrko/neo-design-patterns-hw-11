import { NotificationService } from "../services/NotificationService";

export class User {
  constructor(
    public email: string,
    public phone: string,
    public deviceToken: string
  ) {}

  sendNotification(message: string): void {
    const notifier = new NotificationService();
    notifier.sendEmail(this, message);
    notifier.sendSMS(this, message);
    notifier.sendPush(this, message);
  }
}

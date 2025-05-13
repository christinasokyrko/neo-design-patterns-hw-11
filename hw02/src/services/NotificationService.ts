import { User } from "../models/User";
import { Logger } from "./Logger";

export class NotificationService {
  private logger = new Logger();

  sendEmail(user: User, message: string): void {
    this.logger.log(`Sending EMAIL to ${user.email}`);
    console.log(`Email sent to ${user.email}: ${message}`);
  }

  sendSMS(user: User, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }

  sendPush(user: User, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    console.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}

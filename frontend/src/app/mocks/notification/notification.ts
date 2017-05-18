import { User } from "../user/user";
import { NotificationType } from "../notification-type/notification-type";

export class Notification {
  type: NotificationType;
  location: string;
  message: string;
  relator: User;
  date: Date;
  isRead: boolean;
  icon: string;
}

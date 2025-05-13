import { User } from "./models/User";

const user = new User("example@email.com", "+380123456789", "device-token-abc");

user.sendNotification("Ваш платіж оброблено успішно!");

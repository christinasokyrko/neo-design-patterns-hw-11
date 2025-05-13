// 
import { AppConfigService } from "./AppConfigService";

const config1 = new AppConfigService("Acme Inc.", "Confidential");
const config2 = new AppConfigService("Another Corp", "Top Secret");

console.log(config1.companyName); // Acme Inc.
console.log(config2.companyName); // Another Corp

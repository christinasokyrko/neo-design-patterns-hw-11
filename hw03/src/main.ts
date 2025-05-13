import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";
import { PaymentContext } from "./app/PaymentContext";

// Отримуємо провайдера з командного рядка
const provider = process.argv[2]?.toLowerCase() || "stripe";

// Створюємо відповідну фабрику
let factory;
switch (provider) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
    factory = new AppleFactory();
    break;
  default:
    console.error(`Unknown provider: ${provider}. Using Stripe as default.`);
    factory = new StripeFactory();
}

// Створюємо контекст та обробляємо платіж
const context = new PaymentContext(factory);
context.processPayment(100);

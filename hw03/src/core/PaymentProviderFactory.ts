import { PaymentProvider } from './PaymentProvider';

export interface PaymentProviderFactory {
  createPaymentProvider(): PaymentProvider;
} 
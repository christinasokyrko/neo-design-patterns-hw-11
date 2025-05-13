export interface PaymentProvider {
  authorize(amount: number): void;
  capture(transactionId: string): void;
  refund(transactionId: string): void;
} 
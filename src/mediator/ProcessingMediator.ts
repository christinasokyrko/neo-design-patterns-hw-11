import { DataRecord } from "../models/DataRecord";
import { AccessLogWriter } from "./writers/AccessLogWriter";
import { TransactionWriter } from "./writers/TransactionWriter";
import { ErrorLogWriter } from "./writers/ErrorLogWriter";
import { RejectedWriter } from "./writers/RejectedWriter";

export class ProcessingMediator {
  private accessLogWriter: AccessLogWriter;
  private transactionWriter: TransactionWriter;
  private errorLogWriter: ErrorLogWriter;
  private rejectedWriter: RejectedWriter;

  private successCount = 0;
  private rejectCount = 0;

  constructor(
    accessLogWriter: AccessLogWriter,
    transactionWriter: TransactionWriter,
    errorLogWriter: ErrorLogWriter,
    rejectedWriter: RejectedWriter
  ) {
    this.accessLogWriter = accessLogWriter;
    this.transactionWriter = transactionWriter;
    this.errorLogWriter = errorLogWriter;
    this.rejectedWriter = rejectedWriter;
  }

  onSuccess(record: DataRecord): void {
    this.successCount++;
    switch (record.type) {
      case "access_log":
        this.accessLogWriter.write(record);
        break;
      case "transaction":
        this.transactionWriter.write(record);
        break;
      case "system_error":
        this.errorLogWriter.write(record);
        break;
    }
  }

  onRejected(record: DataRecord, error: string): void {
    this.rejectCount++;
    this.rejectedWriter.write(record, error);
  }

  getSuccessCount(): number {
    return this.successCount;
  }

  getRejectCount(): number {
    return this.rejectCount;
  }

  async finalize() {
    await Promise.all([
      this.accessLogWriter.finalize(),
      this.transactionWriter.finalize(),
      this.errorLogWriter.finalize(),
      this.rejectedWriter.finalize(),
    ]);
  }
}

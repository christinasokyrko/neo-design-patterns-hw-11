import { AbstractHandler } from "../AbstractHandler";
import { TransactionRecord } from "../../models/DataRecord";

export class CurrencyNormalizer extends AbstractHandler {
  protected process(record: TransactionRecord): TransactionRecord {
    if (!record.currency || typeof record.currency !== "string") {
      throw new Error("Missing or invalid currency");
    }
    return { ...record, currency: record.currency.toUpperCase() };
  }
}
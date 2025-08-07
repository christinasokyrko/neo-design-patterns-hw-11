import * as fs from "fs/promises";
import { TransactionRecord } from "../../models/DataRecord";

export class TransactionWriter {
  private lines: string[] = [];

  constructor() {
    this.lines.push("timestamp,amount,currency");
  }

  write(record: TransactionRecord) {
    const line = `${record.timestamp},${record.amount},${record.currency}`;
    this.lines.push(line);
  }

  async finalize() {
    await fs.mkdir("output", { recursive: true });
    await fs.writeFile("output/transactions.csv", this.lines.join("\n"));
  }
}

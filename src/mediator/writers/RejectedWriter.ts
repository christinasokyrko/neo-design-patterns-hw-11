import * as fs from "fs/promises";
import { DataRecord } from "../../models/DataRecord";

export class RejectedWriter {
  private records: { record: DataRecord; error: string }[] = [];

  write(record: DataRecord, error: string) {
    this.records.push({ record, error });
  }

  async finalize() {
    await fs.mkdir("output", { recursive: true });
    const fileHandle = await fs.open("output/rejected.jsonl", "w");
    try {
      for (const rec of this.records) {
        await fileHandle.write(`${JSON.stringify(rec)}\n`);
      }
    } finally {
      await fileHandle.close();
    }
  }
}

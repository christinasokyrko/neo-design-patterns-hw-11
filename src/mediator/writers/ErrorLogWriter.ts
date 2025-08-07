import * as fs from "fs/promises";
import { SystemErrorRecord } from "../../models/DataRecord";

export class ErrorLogWriter {
  private records: SystemErrorRecord[] = [];

  write(record: SystemErrorRecord) {
    this.records.push(record);
  }

  async finalize() {
    await fs.mkdir("output", { recursive: true });
    const fileHandle = await fs.open("output/errors.jsonl", "w");
    try {
      for (const rec of this.records) {
        await fileHandle.write(`${JSON.stringify(rec)}\n`);
      }
    } finally {
      await fileHandle.close();
    }
  }
}

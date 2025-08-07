import { AbstractHandler } from "../AbstractHandler";
import { BaseRecord } from "../../models/DataRecord";

export class TimestampParser extends AbstractHandler {
  protected process(record: BaseRecord): BaseRecord {
    const date = new Date(record.timestamp);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid timestamp");
    }
    return { ...record, timestamp: date.toISOString() };
  }
}

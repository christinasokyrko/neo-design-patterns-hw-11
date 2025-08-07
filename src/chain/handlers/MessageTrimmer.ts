import { AbstractHandler } from "../AbstractHandler";
import { SystemErrorRecord } from "../../models/DataRecord";

export class MessageTrimmer extends AbstractHandler {
  protected process(record: SystemErrorRecord): SystemErrorRecord {
    if (typeof record.message !== "string") {
      throw new Error("Invalid message");
    }
    const trimmed = record.message.length > 255 ? record.message.slice(0, 255) : record.message;
    return { ...record, message: trimmed };
  }
}

import { AbstractHandler } from "../AbstractHandler";
import { SystemErrorRecord } from "../../models/DataRecord";

const allowed = ["info", "warning", "critical"];

export class LevelValidator extends AbstractHandler {
   protected process(record: SystemErrorRecord): SystemErrorRecord {
    const allowedLevels = ["info", "warning", "critical"];
    if (!allowedLevels.includes(record.level)) {
      throw new Error("Invalid error level");
    }
    return record;
  }
}

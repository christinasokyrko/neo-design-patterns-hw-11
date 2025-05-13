import { DataExporter } from "./DataExporter";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

export class XmlExporter extends DataExporter {
  protected render(): string {
    // TODO
  }

  // TODO afterRender

  protected save(): void {
    // TODO
  }
}

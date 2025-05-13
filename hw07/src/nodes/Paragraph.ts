import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

export class Paragraph implements DocNode {
  constructor(private text: string, private renderer: DocRenderer) {}
  render(): string {
    // TODO: Implement the render method
  }
}

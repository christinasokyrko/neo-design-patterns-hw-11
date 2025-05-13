import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

export class List implements DocNode {
  constructor(private items: string[], private renderer: DocRenderer) {}
  render(): string {
    // TODO: Implement the render method
  }
}

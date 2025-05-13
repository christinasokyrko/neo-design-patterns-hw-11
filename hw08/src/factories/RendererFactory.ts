import { DocRenderer } from "../interfaces/DocRenderer";
import { HTMLRenderer } from "../renderers/HTMLRenderer";
import { MarkdownRenderer } from "../renderers/MarkdownRenderer";
import { PlainTextRenderer } from "../renderers/PlainTextRenderer";

export type RendererType = "html" | "markdown" | "plain";

export class RendererFactory {
  static create(type: RendererType): DocRenderer {
    // TODO: Implement the create method
  }

  static getSupportedFormats(): RendererType[] {
    return ["html", "markdown", "plain"];
  }
}

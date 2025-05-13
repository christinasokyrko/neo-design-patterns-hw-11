import { RenderEventSubscriber } from "./interfaces/RenderEventSubscriber";
import { RenderContext } from "./interfaces/RenderContext";

export class RenderEventPublisher {
  private static subscribers = new Set<RenderEventSubscriber>();

  static subscribe(subscriber: RenderEventSubscriber): void {
    // TODO: Implement the subscribe method
  }

  static unsubscribe(subscriber: RenderEventSubscriber): void {
    // TODO: Implement the unsubscribe method
  }

  static notify(context: RenderContext): void {
    // TODO: Implement the notify method
  }
}

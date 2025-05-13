import { UserData } from "../data/UserData";
import fetch from "node-fetch";

export abstract class DataExporter {
  protected data: UserData[] = [];
  protected result: string = "";

  public async export() {
    // TODO: Implement export logic
  }

  protected async load() {
    // TODO: Implement load logic
  }

  protected transform() {
    // TODO: Implement transform logic
  }

  protected beforeRender() {
    // hook
  }

  protected afterRender() {
    // hook
  }

  protected abstract render(): string;
  protected abstract save(): void;
}

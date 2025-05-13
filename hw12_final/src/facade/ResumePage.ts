import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    // TODO: Завантажити дані через fetchData
    // TODO: Імпортувати дані через ResumeImporter
  }

  private async fetchData(path: string): Promise<unknown> {
    // TODO: Завантажити JSON з вказаного шляху
    return {};
  }
}

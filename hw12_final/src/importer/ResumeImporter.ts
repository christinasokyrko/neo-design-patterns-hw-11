/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  /**
   * Перевіряє, чи відповідає JSON-об'єкт очікуваній структурі
   *
   * TODO: Реалізуйте валідацію JSON-даних резюме.
   * Перевірте наявність необхідних полів (header, summary, experience, education, skills)
   */
  protected validate(): void {
    // TODO: Додайте перевірки на наявність обов'язкових полів та їх структуру. Неприпустимий формат JSON
  }

  /**
   * Перетворює JSON-дані у внутрішню модель резюме
   *
   */
  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  /**
   * Рендерить модель резюме у DOM
   *
   * TODO: Реалізуйте рендеринг моделі у DOM-дерево
   */
  protected render(model: ResumeModel): void {
    const root = document.getElementById("resume-content")!;
    // TODO: Створіть фабрику і використайте її для створення і рендерингу блоків
    const factory = new BlockFactory();

    // TODO: Створіть і додайте у DOM кожен блок резюме
  }
}

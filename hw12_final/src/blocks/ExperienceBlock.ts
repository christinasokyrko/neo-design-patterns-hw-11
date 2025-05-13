/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience, Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience) {}

  /**
   * Рендеринг блоку досвіду роботи
   *
   * TODO: Реалізуйте метод render(), який створює DOM-елементи для секції досвіду
   * та використовує патерн Composite для рендерингу проєктів всередині цієї секції.
   */
  render(): HTMLElement {
    // Створюємо контейнер для досвіду роботи
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";

    // TODO: Для кожного досвіду створити div.experience-item з innerHTML (позиція, компанія, період)
    // TODO: Додати проєкти (ProjectBlock, HighlightDecorator) до цього div
    // TODO: Додати всі experience-item до секції

    return container;
  }
}

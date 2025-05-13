/**
 * Блок відображення короткого опису резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SummaryBlock implements IBlock {
  constructor(private d: ResumeModel["summary"]) {}

  /**
   * Рендеринг блоку короткого опису
   *
   * TODO: Реалізуйте метод для відображення секції з коротким описом
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section summary";

    // TODO: Додайте до секції заголовок h2 і параграф з текстом опису (this.d.text)

    return el;
  }
}

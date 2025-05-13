/**
 * Блок відображення освіти в резюме
 */

import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education) {}

  /**
   * Рендеринг блоку освіти
   *
   * TODO: Реалізуйте метод для відображення інформації про освіту
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = "<h2>Education</h2>";

    // TODO: Додайте до секції інформацію про навчальний заклад (this.d.institution),
    // отриманий ступінь (this.d.degree) та період навчання (this.d.graduation)

    return el;
  }
}

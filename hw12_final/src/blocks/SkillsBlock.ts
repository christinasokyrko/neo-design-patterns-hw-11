/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  /**
   * Рендеринг блоку навичок
   *
   * TODO: Реалізуйте метод для відображення категорій навичок
   * та їх списків у вигляді HTML елементів
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    // TODO: Створіть список навичок, згрупований за категоріями
    // Використайте Object.entries(this.d) для ітерації по всіх категоріях
    // Створіть для кожної категорії елемент списку з назвою категорії та списком навичок

    return sec;
  }
}

/**
 * Патерн Factory Method (Фабричний метод)
 *
 * Клас BlockFactory відповідає за створення різних типів блоків резюме
 * залежно від типу, переданого як параметр.
 */

import {
  ResumeModel,
  Education,
  Experience,
  Skills,
} from "../models/ResumeModel";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";

export interface IBlock {
  render(): HTMLElement;
}

export type BlockType =
  | "header"
  | "summary"
  | "experience"
  | "education"
  | "skills";

export class BlockFactory {
  /**
   * Метод для створення блоку відповідного типу
   *
   * @param type Тип блоку для створення
   * @param model Дані моделі для цього блоку
   * @returns Створений блок, готовий для рендерингу
   *
   * TODO: Реалізуйте метод createBlock, який створює і повертає
   * відповідний блок залежно від типу, використовуючи патерн Factory Method.
   */
  createBlock(type: BlockType, m: ResumeModel): IBlock {
    // TODO: Реалізуйте логіку створення відповідного об'єкта IBlock
    switch (type) {
      case "header":
        // TODO: Поверніть новий HeaderBlock з відповідними даними
        break;
      case "summary":
        // TODO: Поверніть новий SummaryBlock з відповідними даними
        break;
      case "experience":
        // TODO: Поверніть новий ExperienceBlock з відповідними даними
        break;
      case "education":
        // TODO: Поверніть новий EducationBlock з відповідними даними
        break;
      case "skills":
        // TODO: Поверніть новий SkillsBlock з відповідними даними
        break;
      default:
        throw new Error(`Unknown block type: ${type}`);
    }

    // Тимчасове рішення для компілятора видалити після реалізації
    throw new Error("Method not implemented");
  }
}

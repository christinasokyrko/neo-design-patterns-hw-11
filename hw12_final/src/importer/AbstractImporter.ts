/**
 * Патерн Template Method: визначає скелет алгоритму,
 * делегуючи реалізацію деяких кроків підкласам.
 */
export abstract class AbstractImporter<T> {
  constructor(protected raw: unknown) {}

  import(): void {
    this.validate();
    const model = this.map();
    this.render(model);
  }

  // TODO: Реалізуйте ці абстрактні методи в підкласі:

  /**
   * Валідує вхідні дані перед обробкою
   */
  protected abstract validate(): void;

  /**
   * Перетворює вхідні дані на модель
   */
  protected abstract map(): T;

  /**
   * Рендерить модель у DOM
   */
  protected abstract render(model: T): void;
}

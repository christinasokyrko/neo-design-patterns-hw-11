# Домашка - Фінальний проєкт

# «Генератор резюме з JSON‑опису»

## Опис завдання

У цьому фінальному домашньому завданні необхідно реалізувати генератор резюме, який демонструє застосування п'яти патернів проектування: Facade, Template Method, Factory Method, Composite, Decorator.

Завдання має на меті навчити вас:

- Правильно застосовувати патерни проектування в практичних сценаріях
- Створювати модульну, розширювану архітектуру
- Структурувати код з використанням патернів

Необхідно сформувати самодостатню HTML‑сторінку‑резюме, яка будується з єдиного джерела даних — файл `resume.json`. Усі стилі фіксовані у `styles.css`, сторонніх бібліотек або фреймворків не використовуємо. Після компіляції `main.ts` і відкриття `index.html` сторінка повинна безпомилково відобразити повне резюме, а проєкти з прапорцем `"isRecent": true` — підсвітити червоним.

## Структура проекту

```
/
├── index.html                  # Статичний макет сторінки
├── resume.json                 # Джерело даних для сторінки
├── vite.config.js              # Конфігурація Vite
├── tsconfig.json               # Конфігурація TypeScript
├── dist/                       # Директорія для збірки
└── src/
    ├── styles.css              # Базові стилі + .highlight
    ├── facade/
    │   └── ResumePage.ts       # Фасад проєкту
    ├── importer/
    │   ├── AbstractImporter.ts # Базовий Template Method
    │   └── ResumeImporter.ts   # Конкретна реалізація
    ├── blocks/                 # Конкретні блоки резюме
    │   ├── BlockFactory.ts     # Factory Method
    │   ├── HeaderBlock.ts
    │   ├── SummaryBlock.ts
    │   ├── ExperienceBlock.ts  # Composite‑контейнер
    │   ├── ProjectBlock.ts
    │   ├── EducationBlock.ts
    │   └── SkillsBlock.ts
    ├── decorators/
    │   └── HighlightDecorator.ts
    ├── models/
    │   └── ResumeModel.ts      # Типи внутрішньої моделі
    └── main.ts                 # Точка входу
```

## Запуск проекту

1. Встановлення залежностей:

   ```bash
   npm install
   ```

2. Режим розробки:

   ```bash
   npm run dev
   ```

3. Збірка для продакшену:

   ```bash
   npm run build
   ```

4. Попередній перегляд збірки:
   ```bash
   npm run preview
   ```

## Технології

- TypeScript
- Vite (збірка та розробка)
- Патерни проектування
- JSON для зберігання даних
- CSS для стилізації

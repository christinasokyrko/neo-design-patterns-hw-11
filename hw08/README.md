# Домашнє завдання до Теми Поведінковий патерн Спостерігач

## Опис завдання

У цьому домашньому завданні необхідно додати до генератора документа (попереднє домашнє завдання) реактивний шар, який дозволяє відслідковувати процес рендерингу окремих елементів документа. Під час генерації кожен елемент `Paragraph`, `List`, `Section` має повідомляти про те, що він закінчив роботу. Реакція на ці події має реалізовуватись через механізм підписки — тобто через патерн Спостерігач (Observer).

Центральний об'єкт має називатися `RenderEventPublisher`, який зберігає список підписників і розсилає їм повідомлення про подію, що відбулася. Кожен підписник реалізує інтерфейс `RenderEventSubscriber`, який містить метод `update(context: RenderContext)`. Події передаються у вигляді об’єкта типу `RenderContext`, який включає тип елемента, його вміст, додаткову інформацію, як рівень заголовка, кількість пунктів у списку, а також час рендерингу.

Після інтеграції підписників, кожен елемент документа під час рендерингу зможе надсилати подію, на яку реагують підключені сервіси — наприклад, логування або збір статистики. Це дозволяє безболісно розширювати застосунок новими компонентами, такими як логери, аналітика, профайлери, системи повідомлень тощо.

## Структура проекту

```
src/
├── main.ts
├── RenderEventPublisher.ts
├── interfaces/
│   ├── RenderEventSubscriber.ts
│   ├── RenderContext.ts
│   ├── DocNode.ts
│   └── DocRenderer.ts
├── subscribers/
│   ├── RenderLoggerSubscriber.ts
│   ├── SummaryCollector.ts
│   └── PerformanceSubscriber.ts
├── nodes/
│   ├── Section.ts
│   ├── Paragraph.ts
│   └── List.ts
├── factories/
│   └── RendererFactory.ts
└── renderers/
    ├── HTMLRenderer.ts
    ├── MarkdownRenderer.ts
    ├── PlainTextRenderer.ts
    └── BaseRenderer.ts
```

## Як реалізовано патерн Observer

- Кожен елемент (Section, Paragraph, List) після рендеру викликає:
  ```ts
  RenderEventPublisher.notify(context);
  ```
- `RenderEventPublisher` — статичний клас, керує підписниками (subscribe/unsubscribe/notify)
- `RenderEventSubscriber` — інтерфейс підписника (метод update)
- `RenderContext` — об'єкт події (тип елемента, вміст, рівень, items, renderTime)
- Підписники (`subscribers/`):
  - `RenderLoggerSubscriber` — логування рендеру
  - `SummaryCollector` — підрахунок кількості елементів
  - `PerformanceSubscriber` — підрахунок часу рендеру

## Приклад запуску і виводу

```bash
npx ts-node src/main.ts markdown
```

```
# Структурні патерни
...
[Log] Rendered Paragraph (36 chars)
[Log] Rendered List (3 items)
[Log] Rendered Section ("Composite", level 2)
...
[Summary] Rendered 2 sections, 3 paragraphs, 2 lists
[Performance] Total render time: 12ms
```

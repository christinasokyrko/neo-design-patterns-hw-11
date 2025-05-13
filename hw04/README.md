# Домашнє завдання до Теми 4

### Опис завдання

У цьому домашньому завданні необхідно опрацювати три окремі приклади застосування породжувальних патернів: Одинак, Будівельник та Прототип.

Кожен приклад подано як реалістичну задачу з практичного TypeScript-контексту. Ваше завдання — проаналізувати початковий код та застосувати відповідний патерн, переписавши реалізацію.

## Структура проєкту

```
src/
├── builder/          # Builder pattern implementation
│   ├── DocumentBuilder.ts
│   └── main.ts
├── prototype/        # Prototype pattern implementation
│   └── main.ts
└── singleton/        # Singleton pattern implementation
    └── main.ts
```

## Запуск

1. Встановити залежності:

```bash
npm install
```

2. Запустити приклад Builder патерну:

```bash
npm run builder
```

3. Запустити приклад Prototype патерну:

```bash
npm run prototype
```

4. Запустити приклад Singleton патерну:

```bash
npm run singleton
```

Для розробки з автоматичною перезбіркою:

```bash
npm run dev
```

# Домашнє завдання до Теми Поведінкові патерни Ітератор та Шаблонний метод

# Реалізація патерну Шаблонний метод

## Опис завдання

У цьому домашньому завданні вам необхідно реалізувати експорт користувацької статистики, використовуючи патерн Шаблонний метод. Ви повинні виокремити загальний алгоритм експорту у базовому класі, залишивши деталі форматування у конкретних підкласах.

Дані користувачів мають бути завантажені з API `https://jsonplaceholder.typicode.com/users`. Система повинна підтримувати експорт у три формати: CSV, JSON та XML.

Завдання має на меті навчити вас:

- виокремлювати сталі етапи алгоритму;
- інкапсулювати алгоритм у базовому класі;
- реалізовувати варіативну поведінку через абстрактні та hook-методи.

# Реалізація ітераторів для експортованих файлів

## Опис завдання

Після реалізації експорту користувачів у формати CSV, JSON та XML, необхідно створити окремі ітератори для обходу даних, збережених у цих файлах.

Ітератори повинні надавати послідовний обхід елементів, інкапсулюючи логіку читання та парсингу файлів.

Мета цієї частини завдання:

- навчитися створювати власні ітератори для різних джерел даних;
- практикувати інкапсуляцію обходу структури даних;
- продемонструвати розуміння протоколу ітераторів.

Структура проєкту:

```
/
└── src/
    ├── exporters/
    │   ├── DataExporter.ts     # Базовий клас з шаблонним методом
    │   ├── CsvExporter.ts      # Експорт у CSV
    │   ├── JsonExporter.ts     # Експорт у JSON
    │   └── XmlExporter.ts      # Експорт у XML
    ├── iterators/
    │   ├── CsvIterator.ts
    │   ├── JsonIterator.ts
    │   └── XmlIterator.ts
    ├── data/
    │   └── UserData.ts         # Тип даних користувачів
    ├── main-iterate.ts
    └── main.ts
```

**Запуск:**

```
npx ts-node ./src/main.ts
```

## Очікуваний результат \src\main.ts

Після запуску демонстраційного файлу `main.ts` командою:

```bash
npx ts-node ./src/main.ts
```

повинні створитися три файли з відповідними форматами:

**`users.csv`**

```css
id,name,email,phone
5,Chelsey Dietrich,Lucio_Hettinger@annie.ca,(254)954-1289
10,Clementina DuBuque,Rey.Padberg@karina.biz,024-648-3804
...
```

**`users.json`**

```json
[
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447"
  },
  ...
]
```

**`users.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<users>
  <user>
    <id>5</id>
    <name>Chelsey Dietrich</name>
    <email>Lucio_Hettinger@annie.ca</email>
    <phone>(254)954-1289</phone>
  </user>
  <user>
    <id>10</id>
    <name>Clementina DuBuque</name>
    <email>Rey.Padberg@karina.biz</email>
    <phone>024-648-3804</phone>
  </user>
  <user>
    <id>3</id>
    <name>Clementine Bauch</name>
    <email>Nathan@yesenia.net</email>
    <phone>1-463-123-4447</phone>
  </user>
  ...
</users>
<!-- Експорт згенеровано: 2024-04-28T18:00:30.123Z -->
```

## Очікуваний результат src\main-iterate.ts

Після запуску ітератора для кожного файлу у консолі мають виводитись об'єкти типу `UserData`, наприклад:

```bash
--- CSV ---
{
  id: 5,
  name: 'Chelsey Dietrich',
  email: 'Lucio_Hettinger@annie.ca',
  phone: '(254)954-1289'
}
{
  id: 10,
  name: 'Clementina DuBuque',
  email: 'Rey.Padberg@karina.biz',
  phone: '024-648-3804'
}
...
```

Для всіх трьох форматів CSV, JSON, XML обхід повинен працювати однаково — по одному користувачу за ітерацію.

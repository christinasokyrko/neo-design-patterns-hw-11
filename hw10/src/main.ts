import { TaskManager } from './services/TaskManager';

const manager = new TaskManager();

// Додаємо нову задачу
const taskId = manager.addTask({
    title: 'Завершити домашнє завдання',
    priority: 'high'
});

console.log('--- Після додавання задачі ---');
console.log(manager.getTasks());

// Оновлюємо задачу
manager.updateTask(taskId, {
    title: 'Завершити складне домашнє завдання',
    priority: 'medium'
});

console.log('--- Після оновлення задачі ---');
console.log(manager.getTasks());

// Позначаємо задачу як виконану
manager.completeTask(taskId, true);

console.log('--- Після позначення як виконаної ---');
console.log(manager.getTasks());

// Видаляємо задачу
manager.removeTask(taskId);

console.log('--- Після видалення задачі ---');
console.log(manager.getTasks());

// Скасовуємо видалення
manager.undo();

console.log('--- Після undo видалення ---');
console.log(manager.getTasks());

// Скасовуємо зміну статусу (completed)
manager.undo();

console.log('--- Після undo виконання задачі ---');
console.log(manager.getTasks());

// Скасовуємо оновлення задачі
manager.undo();

console.log('--- Після undo оновлення задачі ---');
console.log(manager.getTasks());

// Скасовуємо додавання задачі
manager.undo();

console.log('--- Після undo додавання задачі ---');
console.log(manager.getTasks());

// Відновлюємо додавання задачі
manager.redo();

console.log('--- Після redo додавання задачі ---');
console.log(manager.getTasks());

// Відновлюємо оновлення задачі
manager.redo();

console.log('--- Після redo оновлення задачі ---');
console.log(manager.getTasks());

// Відновлюємо зміну статусу
manager.redo();

console.log('--- Після redo виконання задачі ---');
console.log(manager.getTasks());

// Відновлюємо видалення задачі
manager.redo();

console.log('--- Після redo видалення задачі ---');
console.log(manager.getTasks()); 
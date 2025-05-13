import { Task } from './Task';

export class TaskList {
    private tasks: Map<string, Task> = new Map();

    addTask(task: Task): void {
        this.tasks.set(task.id, task);
    }

    removeTask(id: string): Task | undefined {
        const task = this.tasks.get(id);
        if (task) {
            this.tasks.delete(id);
        }
        return task;
    }

    updateTask(id: string, updates: Partial<Task>): Task | undefined {
        const task = this.tasks.get(id);
        if (task) {
            const updated = { ...task, ...updates };
            this.tasks.set(id, updated);
            return updated;
        }
        return undefined;
    }

    completeTask(id: string, completed: boolean = true): Task | undefined {
        const task = this.tasks.get(id);
        if (task) {
            task.completed = completed;
        }
        return task;
    }

    getAllTasks(): Task[] {
        return Array.from(this.tasks.values());
    }
} 
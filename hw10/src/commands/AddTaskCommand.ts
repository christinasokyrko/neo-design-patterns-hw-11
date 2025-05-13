import { AbstractCommand } from './AbstractCommand';
import { TaskList } from '../models/TaskList';
import { Task } from '../models/Task';

export class AddTaskCommand extends AbstractCommand {
    constructor(private taskList: TaskList, private task: Task) {
        super();
    }

    execute(): void {
        this.taskList.addTask(this.task);
    }

    undo(): void {
        this.taskList.removeTask(this.task.id);
    }
} 
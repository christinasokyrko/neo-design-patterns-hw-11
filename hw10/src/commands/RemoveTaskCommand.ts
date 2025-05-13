import { AbstractCommand } from "./AbstractCommand";
import { TaskList } from "../models/TaskList";
import { Task } from "../models/Task";

export class RemoveTaskCommand extends AbstractCommand {
  private removedTask: Task | undefined;

  constructor(private taskList: TaskList, private taskId: string) {
    super();
  }

  execute(): void {
    // TODO
  }

  undo(): void {
    // TODO
  }
}

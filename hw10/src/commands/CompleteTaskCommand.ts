import { AbstractCommand } from "./AbstractCommand";
import { TaskList } from "../models/TaskList";
import { Task } from "../models/Task";

export class CompleteTaskCommand extends AbstractCommand {
  private previousState: boolean | undefined;

  constructor(
    private taskList: TaskList,
    private taskId: string,
    private completed: boolean = true
  ) {
    super();
  }

  execute(): void {
    // TODO
  }

  undo(): void {
    // TODO
  }
}

import { Command } from './Command';

export abstract class AbstractCommand implements Command {
    abstract execute(): void;
    abstract undo(): void;

    redo(): void {
        this.execute();
    }
} 
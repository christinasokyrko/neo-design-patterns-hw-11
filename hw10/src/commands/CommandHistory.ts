import { Command } from './Command';

export class CommandHistory {
    private commands: Command[] = [];
    private currentIndex: number = -1;

    executeCommand(command: Command): void {
        command.execute();

        if (this.currentIndex < this.commands.length - 1) {
            this.commands.splice(this.currentIndex + 1);
        }

        this.commands.push(command);
        this.currentIndex = this.commands.length - 1;
    }

    undo(): void {
        if (this.currentIndex >= 0) {
            this.commands[this.currentIndex].undo();
            this.currentIndex--;
        }
    }

    redo(): void {
        if (this.currentIndex < this.commands.length - 1) {
            this.currentIndex++;
            this.commands[this.currentIndex].redo();
        }
    }
} 
namespace WshNjs {
    export class Task {
        static last_id: number = 0;
        id: number;
        enabled: boolean;
        callback: any;
        constructor(callback: any) {
            WshNjs.Task.last_id++;
            this.id = WshNjs.Task.last_id;
            this.enabled = true;
            this.callback = callback;
        }
        getId(): number {
            return this.id;
        }
        isEnabled(): boolean {
            return this.enabled;
        }
        setEnabled(enabled: boolean) {
            this.enabled = enabled;
        }
        test(): boolean {
            return true;
        }
        execute(): void {
            if (this.callback) {
                this.callback();
            }
            this.setEnabled(false);
        }
    }

    export class IntervalTask extends WshNjs.Task {
        interval: number;
        next_execution: number;
        constructor(callback: any, interval: number) {
            super(callback);
            this.interval = interval;
            this.next_execution = Date.now() + this.interval;
        }
        test(): boolean {
            return (this.next_execution < Date.now());
        }
        execute(): void {
            super.execute();
            this.next_execution = Date.now() + this.interval;
            this.setEnabled(true);
        }
    }

    export class TimerTask extends WshNjs.IntervalTask {
        constructor(callback: any, timeout: number) {
            super(callback, timeout);
        }
        execute(): void {
            super.execute();
            this.setEnabled(false);
        }
    }

    export class Scheduler {
        tasks: Task[];
        missing_count: number;
        constructor() {
            this.tasks = [];
            this.missing_count = 0;
        }
        schedule() {
            let execute_count = 0;
            let tasks: Task[] = this.tasks;
            this.tasks = [];
            for (let task of tasks) {
                if (task.isEnabled()) {
                    if (task.test()) {
                        task.execute();
                        execute_count++;
                    }
                    this.tasks.push(task);
                }
            }
            if (execute_count > 0) {
                this.missing_count = 0;
            } else {
                this.missing_count++;
                if (this.missing_count > 100) {
                    WScript.Sleep(100);
                    this.missing_count = 0;
                }
            }
        }
        addTask(task: Task) {
            this.tasks.push(task);
        }
        killTask(taskId: number) {
            for (let task of this.tasks) {
                if (task.getId() == taskId) {
                    task.setEnabled(false);
                }
            }
        }
        isActive(): boolean {
            return (this.tasks.length != 0);
        }
    }
    export let scheduler = new WshNjs.Scheduler();
}
namespace WshNjs {
    class CommandTask extends WshNjs.Task {
        command: string;
        options: any;
        callback: any;
        stdout_path: string;
        stderr_path: string;
        finish_path: string;
        timeout: number;
        terminate_date: number;
        finish_reason: string;

        constructor(command: string, options: any, callback: any) {
            super();
            let base_path = [WshNjs.wsh_fs.GetSpecialFolder(TemporaryFolder), WshNjs.wsh_fs.GetTempName()].join('\\');
            this.command = command;
            this.options = options;
            this.callback = callback;
            this.stdout_path = base_path + '.stdout';
            this.stderr_path = base_path + '.stderr';
            this.finish_path = base_path + '.finish';
            this.timeout = 0;
            this.terminate_date = undefined;

            let body = [this.command, ' 1>', this.stdout_path, ' 2>', this.stderr_path].join('');
            let post = ['TYPE nul >', this.finish_path];
            let exec = ['%ComSpec% /C "', body, ' & ', post, '"'].join('');
            WshNjs.wsh_sh.Run(exec, 0, false);
        }

        test(): boolean {
            if (WshNjs.wsh_fs.FileExists(this.finish_path)) {
                this.finish_reason = 'success';
                return true;
            } else if (this.timeout > 0 && this.terminate_date < Date.now()) {
                this.finish_reason = 'timeout';
                return true;
            } else {
                return false;
            }
        }

        execute(): void {
            let stdout_content: string = '';
            if (WshNjs.wsh_fs.GetFile(this.stdout_path).Size > 0) {
                let reader: any = WshNjs.wsh_fs.OpenTextFile(this.stdout_path, ForReading);
                stdout_content = reader.ReadAll();
                reader.Close();
            }
            WshNjs.wsh_fs.DeleteFile(this.stdout_path);

            let stderr_content: string = '';
            if (WshNjs.wsh_fs.GetFile(this.stderr_path).Size > 0) {
                let reader: any = WshNjs.wsh_fs.OpenTextFile(this.stderr_path, ForReading);
                stderr_content = reader.ReadAll();
                reader.Close();
            }
            WshNjs.wsh_fs.DeleteFile(this.stderr_path);

            if (this.callback) {
                if (this.finish_reason == 'success') {
                    this.callback(undefined, stdout_content, stderr_content);
                } else {
                    this.callback(this.finish_reason, undefined, undefined);
                }
            }
            WshNjs.wsh_fs.DeleteFile(this.finish_path);

            this.setEnabled(false);
        }
    }

    export class ChildProcess {
        constructor() {
        }

        // interface ChildProcess extends events.EventEmitter {
        //     stdin:  stream.Writable;
        //     stdout: stream.Readable;
        //     stderr: stream.Readable;
        //     pid: number;
        //     kill(signal?: string): void;
        //     send(message: any, sendHandle: any): void;
        //     disconnect(): void;
        // }

        // spawn(command: string, args?: string[], options?: {
        //     cwd?: string;
        //     stdio?: any;
        //     custom?: any;
        //     env?: any;
        //     detached?: boolean;
        // }): ChildProcess;

        // exec(command: string, options: {
        //     cwd?: string;
        //     stdio?: any;
        //     customFds?: any;
        //     env?: any;
        //     encoding?: string;
        //     timeout?: number;
        //     maxBuffer?: number;
        //     killSignal?: string;
        // }, callback: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;

        exec(command: string, options?: any, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess {
            // setup options
            if (typeof (options) === 'undefined') {
                options = {};
            }
            if (typeof (options.cwd) === 'undefined') {
            }
            if (typeof (options.env) === 'undefined') {
            }
            if (typeof (options.encoding) === 'undefined') {
            }
            if (typeof (options.shell) === 'undefined') {
            }
            if (typeof (options.timeout) === 'undefined') {
                options.timeout = 0;
            }
            if (typeof (options.maxBuffer) === 'undefined') {
            }
            if (typeof (options.killSignal) === 'undefined') {
            }

            // execute
            let task: WshNjs.Task = new CommandTask(command, options, callback);
            WshNjs.scheduler.addTask(task);
            return this;
        }

        execSync(command: string, options?: any): string {
            let stdout_content: string = '';
            let running: boolean = true;
            this.exec(command, options, (error: Error, stdout: string, stderr: string) => {
                stdout_content = stdout;
                running = false;
            });
            while (running) {
                WshNjs.scheduler.schedule();
            }
            return stdout_content;
        }

        // exec(command: string, callback: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;

        // execFile(file: string, args: string[], options: {
        //     cwd?: string;
        //     stdio?: any;
        //     customFds?: any;
        //     env?: any;
        //     encoding?: string;
        //     timeout?: number;
        //     maxBuffer?: string;
        //     killSignal?: string;
        // }, callback: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;

        // fork(modulePath: string, args?: string[], options?: {
        //     cwd?: string;
        //     env?: any;
        //     encoding?: string;
        // }): ChildProcess;
    }
}
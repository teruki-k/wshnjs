namespace WshNjs {
    class Executor {
        private command: string;
        private options: any;
        private callback: any;
        private stdout_path: string;
        private stderr_path: string;
        private finish_path: string;
        private begin_timestamp: number;
        private timeout: number;
        private interval: number;

        constructor(command: string, options: any, callback: any) {
            let base_path = `${WshNjs.wsh_fs.GetSpecialFolder(TemporaryFolder)}\\${WshNjs.wsh_fs.GetTempName()}`;
            this.command = command;
            this.options = options;
            this.options = options;
            if (typeof (callback) === 'function') {
                this.callback = callback;
            } else {
                this.callback = undefined;
            }
            this.callback = callback;
            this.stdout_path = `${base_path}.1`;
            this.stderr_path = `${base_path}.2`;
            this.finish_path = `${base_path}.finish`;
            this.timeout = this.options['timeout'];
            this.interval = 100;
        }
        public execute_command(): void {
            //let command = `%ComSpec% /C "${this.command} 1>${this.stdout_path} 2>${this.stderr_path} & TYPE nul >${this.finish_path}"`;
            let command = ['%ComSpec% /C "', this.command, ' 1>', this.stdout_path, ' 2>', this.stderr_path, ' & TYPE nul >', this.finish_path, '"'].join('');
            WshNjs.wsh_sh.Run(command, 0, false);
            this.begin_timestamp = Date.now();
            setTimeout(() => { this.poll_command(); }, 0);
        }
        private read_and_delete_file(file_name: string): string {
            let content: string = '';
            if (WshNjs.wsh_fs.GetFile(file_name).Size > 0) {
                let reader: any = WshNjs.wsh_fs.OpenTextFile(file_name, ForReading);
                content = reader.ReadAll();
                reader.Close();
            }
            WshNjs.wsh_fs.DeleteFile(file_name);
            return content;
        }
        private poll_command(): void {
            if (WshNjs.wsh_fs.FileExists(this.finish_path)) {
                let stdout_content: string = this.read_and_delete_file(this.stdout_path);
                let stderr_content: string = this.read_and_delete_file(this.stderr_path);
                WshNjs.wsh_fs.DeleteFile(this.finish_path);
                if (this.callback) {
                    this.callback(undefined, stdout_content, stderr_content);
                }
            } else if (this.timeout > 0 && this.begin_timestamp + this.timeout < Date.now()) {
                if (this.callback) {
                    this.callback({ message: 'timeout', fileName: undefined, lineNumber: -1 }, undefined, undefined);
                }
            } else {
                setTimeout(() => { this.poll_command(); }, this.interval);
            }
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

        exec(command: string, options: any, callback?: any): ChildProcess {
            // parse arguments
            if (typeof (options) === 'function') {
                callback = options;
                options = {};
            }

            // setup options
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
            let context = new Executor(command, options, callback);
            context.execute_command();

            return this;
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
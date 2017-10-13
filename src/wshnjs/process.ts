namespace WshNjs {
    export class Process {
        public arch: string;
        public argv: string[];
        public argv0: string;
        public execArgv: string[];

        constructor() {
            let argv: string[] = [];
            if (typeof (WScript) !== 'undefined') {
                argv.push(WScript.FullName.replace(/\\/g, '/'));
                argv.push(WScript.ScriptFullName.replace(/\\/g, '/'));
                let args: any = WScript.Arguments;
                for (let i = 0; i < args.Count(); i++) {
                    argv.push(args.Item(i).toString());
                }
            }
            this.arch = 'ia32';
            this.argv = argv;
            this.argv0 = argv[0];
            this.execArgv = this.argv.slice(2);
        }
        abort(): void {
            if (typeof (WScript) !== 'undefined') {
                WScript.Quit(1);
            }
        }
        chdir(directory: string): void {
            WshNjs.wsh_sh.CurrentDirectory = directory;
        }
        cwd(): string {
            return WshNjs.wsh_sh.CurrentDirectory.toString().replace(/\\/g, '/');
        }
        exit(code: number): void {
            while (WshNjs.scheduler.isActive()) {
                WshNjs.scheduler.schedule();
            }
            if (typeof (WScript) !== 'undefined') {
                WScript.Quit(code);
            }
        }
        platform(): string {
            return 'win32';
        }
        release(): any {
            return {};
        }
    }
}
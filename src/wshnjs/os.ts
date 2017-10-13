namespace WshNjs {
    export class Os {
        tmpDir(): string {
            return WshNjs.wsh_sh.ExpandEnvironmentStrings('%TMP%');
        }

        hostname(): string {
            return WshNjs.wsh_sh.ExpandEnvironmentStrings('%COMPUTERNAME%');
        }

        type(): string {
            return WshNjs.wsh_sh.ExpandEnvironmentStrings('%OS%');
        }

        platform(): string {
            return 'win32';
        }

        arch(): string {
            return WshNjs.wsh_sh.ExpandEnvironmentStrings('%PROCESSOR_ARCHITECTURE%');
        }

        release(): string {
            return '';
        }

        uptime(): number {
            return 0;
        }

        loadavg(): number[] {
            return [];
        }

        totalmem(): number {
            return 0;
        }

        freemem(): number {
            return 0;
        }

        cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[] {
            return [];
        }

        networkInterfaces(): any {
            return undefined;
        }

        public EOL: string = '\r\n';
    }
}
namespace WshNjs {
    export class Path {
        join(...paths: any[]): string {
            return paths.join(WshNjs.Path.sep);
        }

        resolve(...pathSegments: any[]): string {
            return '';
        }

        relative(from: string, to: string): string {
            return '';
        }

        dirname(p: string): string {
            return WshNjs.wsh_fs.GetParentFolderName(p);
        }

        basename(p: string, ext?: string): string {
            return WshNjs.wsh_fs.GetBaseName(p);
        }

        extname(p: string): string {
            return WshNjs.wsh_fs.GetExtensionName(p);
        }

        static sep: string = '\\';
    }
}
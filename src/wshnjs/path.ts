class wshnjs_path {
    private static wsh_fs: any = new ActiveXObject('Scripting.FileSystemObject');

    join(...paths: any[]): string {
        return paths.join(this.sep);
    }

    resolve(...pathSegments: any[]): string {
        return '';
    }

    relative(from: string, to: string): string {
        return '';
    }

    dirname(p: string): string {
        return wshnjs_path.wsh_fs.GetParentFolderName(p);
    }

    basename(p: string, ext?: string): string {
        return wshnjs_path.wsh_fs.GetBaseName(p);
    }

    extname(p: string): string {
        return wshnjs_path.wsh_fs.GetExtensionName(p);
    }

    sep: string = '\\';
}

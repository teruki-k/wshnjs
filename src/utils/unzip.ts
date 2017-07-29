class utils_unzip {
    static wsh_shell: any = new ActiveXObject('Shell.Application');

    constructor() {
    }

    unzip(zip_path: string, output_folder: string): void {
        var src = utils_unzip.wsh_shell.NameSpace(zip_path);
        var dest = utils_unzip.wsh_shell.NameSpace(output_folder);
        dest.CopyHere(src.Items(), FOF_NO_UI);
    }
}

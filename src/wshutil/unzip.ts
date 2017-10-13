namespace WshUtil {
    export class Unzip {
        unzip(zip_path: string, output_folder: string): void {
            let src = WshNjs.wsh_shell.NameSpace(zip_path);
            let dest = WshNjs.wsh_shell.NameSpace(output_folder);
            dest.CopyHere(src.Items(), FOF_NO_UI);
        }
    }
}
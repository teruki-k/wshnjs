namespace WshUtil {
    export class Mht {
        save(html_path: string, output_file_name: string): void {
            let html_url = 'file:///' + WshNjs.wsh_fs.GetAbsolutePathName(html_path).replace('\\', '/');
            WshNjs.cdo_msg.CreateMHTMLBody(html_url, 0);
            WshNjs.cdo_msg.GetStream().SaveToFile(output_file_name, adSaveCreateOverwrite);
        }
    }
}
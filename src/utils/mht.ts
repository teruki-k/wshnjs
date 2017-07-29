class utils_mht {
    static wsh_fs: any = new ActiveXObject('Scripting.FileSystemObject');

    constructor() {
    }

    save(html_path: string, output_file_name: string): void {
        var html_url = 'file:///' + utils_mht.wsh_fs.GetAbsolutePathName(html_path).replace('\\', '/');
        var cdo_msg: any = new ActiveXObject('CDO.Message');
        cdo_msg.CreateMHTMLBody(html_url, 0);
        cdo_msg.GetStream().SaveToFile(output_file_name, adSaveCreateOverwrite);
    }
}

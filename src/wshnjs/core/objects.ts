namespace WshNjs {
    export let wsh_sh: any = new ActiveXObject('WScript.Shell');
    export let wsh_fs: any = new ActiveXObject('Scripting.FileSystemObject');
    export let wsh_shell: any = new ActiveXObject('Shell.Application');
    export let cdo_msg: any = new ActiveXObject('CDO.Message');
}
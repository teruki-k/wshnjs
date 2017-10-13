function WshNjsRequire(id: string): any {
    if (id.startsWith('./')) {
        return undefined;
    } else if (id == 'child_process' && typeof (WshNjs.ChildProcess) !== 'undefined') {
        return new WshNjs.ChildProcess();
    } else if (id == 'fs' && typeof (WshNjs.Fs) !== 'undefined') {
        return new WshNjs.Fs();
    } else if (id == 'os' && typeof (WshNjs.Os) !== 'undefined') {
        return new WshNjs.Os();
    } else if (id == 'path' && typeof (WshNjs.Path) !== 'undefined') {
        return new WshNjs.Path();
    } else if (id == 'process' && typeof (WshNjs.Process) !== 'undefined') {
        return new WshNjs.Process();
    } else {
        return undefined;
    }
};

declare function require(id: string): any;
if (typeof (require) === 'undefined') {
    eval("require = WshNjsRequire;");
}
namespace WshNjs {
    class FsStats {
        path: string;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: string;
        mtime: string;
        ctime: string;
        constructor(path: string) {
            this.path = path;
            if (WshNjs.wsh_fs.FileExists(this.path)) {
                let file: any = WshNjs.wsh_fs.GetFile(this.path);
                this.dev = -1;
                this.ino = -1;
                this.mode = -1;
                this.nlink = -1;
                this.uid = -1;
                this.gid = -1;
                this.rdev = -1;
                this.size = file.Size;
                this.blksize = -1;
                this.blocks = -1;
                this.atime = file.DateLastAccessed;
                this.mtime = file.DateLastModified;
                this.ctime = file.DateCreated;
            } else {
                this.dev = -1;
                this.ino = -1;
                this.mode = -1;
                this.nlink = -1;
                this.uid = -1;
                this.gid = -1;
                this.rdev = -1;
                this.size = -1;
                this.blksize = -1;
                this.blocks = -1;
                this.atime = '';
                this.mtime = '';
                this.ctime = '';
            }
        }

        isFile(): boolean {
            if (WshNjs.wsh_fs.FileExists(this.path)) {
                return true;
            } else {
                return false;
            }
        }

        isDirectory(): boolean {
            if (WshNjs.wsh_fs.FolderExists(this.path)) {
                return true;
            } else {
                return false;
            }
        }

        isBlockDevice(): boolean {
            return false;
        }

        isCharacterDevice(): boolean {
            return false;
        }

        isSymbolicLink(): boolean {
            return false;
        }

        isFIFO(): boolean {
            return false;
        }

        isSocket(): boolean {
            return false;
        }
    }

    export class Fs {
        rename(oldPath: string, newPath: string, callback?: (err?: any) => void): void {
            this.renameSync(oldPath, newPath);
            if (callback) {
                callback(undefined);
            }
        }

        renameSync(oldPath: string, newPath: string): void {
            // TODO
        }

        // truncate(path: string, callback?: (err?: any) => void): void;

        truncate(path: string, len: number, callback?: (err?: any) => void): void {
            this.truncateSync(path, len);
            if (callback) {
                callback(undefined);
            }
        }

        truncateSync(path: string, len?: number): void {
            // TODO
        }

        // ftruncate(fd: number, callback?: (err?: any) => void): void;

        ftruncate(fd: number, len: number, callback?: (err?: any) => void): void {
            this.ftruncateSync(fd, len);
            if (callback) {
                callback(undefined);
            }
        }

        ftruncateSync(fd: number, len?: number): void {
            // TODO
        }

        chown(path: string, uid: number, gid: number, callback?: (err?: any) => void): void {
            this.chownSync(path, uid, gid);
            if (callback) {
                callback(undefined);
            }
        }

        chownSync(path: string, uid: number, gid: number): void {
            // TODO
        }

        // fchown(fd: number, uid: number, gid: number, callback?: (err?: any) => void): void;

        fchownSync(fd: number, uid: number, gid: number): void {
            // TODO
        }

        // lchown(path: string, uid: number, gid: number, callback?: (err?: any) => void): void;

        lchownSync(path: string, uid: number, gid: number): void {
            // TODO
        }

        // chmod(path: string, mode: number, callback?: (err?: any) => void): void;

        chmod(path: string, mode: string, callback?: (err?: any) => void): void {
            this.chmodSync(path, mode);
            if (callback) {
                callback(undefined);
            }
        }

        // chmodSync(path: string, mode: number): void;

        chmodSync(path: string, mode: string): void {
            // TODO
        }

        // fchmod(fd: number, mode: number, callback?: (err?: any) => void): void;

        fchmod(fd: number, mode: string, callback?: (err?: any) => void): void {
            this.fchmodSync(fd, mode);
            if (callback) {
                callback(undefined);
            }
        }

        // fchmodSync(fd: number, mode: number): void;

        fchmodSync(fd: number, mode: string): void {
            // TODO
        }

        // lchmod(path: string, mode: number, callback?: (err?: any) => void): void;

        lchmod(path: string, mode: string, callback?: (err?: any) => void): void {
            this.lchmodSync(path, mode);
            if (callback) {
                callback(undefined);
            }
        }

        // lchmodSync(path: string, mode: number): void;

        lchmodSync(path: string, mode: string): void {
            // TODO
        }

        stat(path: string, callback?: (err: any, stats: FsStats) => any): void {
            let stats = this.statSync(path);
            if (callback) {
                callback(undefined, stats);
            }
        }

        lstat(path: string, callback?: (err: any, stats: FsStats) => any): void {
            let stats = this.lstatSync(path);
            if (callback) {
                callback(undefined, stats);
            }
        }

        // fstat(fd: number, callback?: (err: any, stats: wshnjs_fs_stats) => any): void;

        statSync(path: string): FsStats {
            return new FsStats(path);
        }

        lstatSync(path: string): FsStats {
            return this.statSync(path);
        }

        // fstatSync(fd: number): wshnjs_fs_stats;

        link(srcpath: string, dstpath: string, callback?: (err?: any) => void): void {
            this.linkSync(srcpath, dstpath);
            if (callback) {
                callback(undefined);
            }
        }

        linkSync(srcpath: string, dstpath: string): void {
            // TODO
        }

        symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: any) => void): void {
            this.symlinkSync(srcpath, dstpath);
            if (callback) {
                callback(undefined);
            }
        }

        symlinkSync(srcpath: string, dstpath: string, type?: string): void {
            // TODO
        }

        readlink(path: string, callback?: (err: any, linkString: string) => any): void {
            let linkString = this.readlinkSync(path);
            if (callback) {
                callback(undefined, linkString);
            }
        }

        readlinkSync(path: string): string {
            return path;
        }

        realpath(path: string, callback?: (err: any, resolvedPath: string) => any): void {
            let resolvedPath = this.realpathSync(path);
            if (callback) {
                callback(undefined, resolvedPath);
            }
        }

        // realpath(path: string, cache: {[path: string]: string}, callback: (err: any, resolvedPath: string) =>any): void;

        realpathSync(path: string, cache?: { [path: string]: string }): string {
            return path;
        }

        unlink(path: string, callback?: (err?: any) => void): void {
            this.unlinkSync(path);
            if (callback) {
                callback(undefined);
            }
        }

        unlinkSync(path: string): void {
            if (WshNjs.wsh_fs.FileExists(path)) {
                WshNjs.wsh_fs.DeleteFile(path);
            }
        }

        rmdir(path: string, callback?: (err?: any) => void): void {
            this.rmdirSync(path);
            if (callback) {
                callback(undefined);
            }
        }

        rmdirSync(path: string): void {
            if (WshNjs.wsh_fs.FolderExists(path)) {
                WshNjs.wsh_fs.DeleteFolder(path);
            }
        }

        mkdir(path: string, callback?: (err?: any) => void): void {
            this.mkdirSync(path);
            if (callback) {
                callback(undefined);
            }
        }

        // mkdir(path: string, mode: number, callback?: (err?: any) => void): void;

        // mkdir(path: string, mode: string, callback?: (err?: any) => void): void;

        // mkdirSync(path: string, mode?: number): void;

        mkdirSync(path: string, mode?: string): void {
            WshNjs.wsh_fs.CreateFolder(path);
        }

        readdir(path: string, callback?: (err: any, files: string[]) => void): void {
            let files = this.readdirSync(path);
            if (callback) {
                callback(undefined, files);
            }
        }

        readdirSync(path: string): string[] {
            let items = [];
            let folder = WshNjs.wsh_fs.GetFolder(path);
            for (let it = new Enumerator(folder.Files); !it.atEnd(); it.moveNext()) {
                let item: string = WshNjs.wsh_fs.GetAbsolutePathName(it.item());
                items.push(item.replace(/\\/g, '/'));
            }
            for (let it = new Enumerator(folder.SubFolders); !it.atEnd(); it.moveNext()) {
                let item: string = WshNjs.wsh_fs.GetAbsolutePathName(it.item());
                items.push(item.replace(/\\/g, '/'));
            }
            return items;
        }

        close(fd: number, callback?: (err?: any) => void): void {
            if (callback) {
                callback(undefined);
            }
        }

        closeSync(fd: number): void {
            // TODO
        }

        open(path: string, flags: string, callback?: (err: any, fd: number) => any): void {
            let fd = this.openSync(path, flags);
            if (callback) {
                callback(undefined, fd);
            }
        }

        // open(path: string, flags: string, mode: number, callback?: (err: any, fd: number) => any): void;

        // open(path: string, flags: string, mode: string, callback?: (err: any, fd: number) => any): void;

        // openSync(path: string, flags: string, mode?: number): number;

        openSync(path: string, flags: string, mode?: string): number {
            // TODO
            return -1;
        }

        utimes(path: string, atime: number, mtime: number, callback?: (err?: any) => void): void {
            this.utimesSync(path, atime, mtime);
            if (callback) {
                callback(undefined);
            }
        }

        // utimes(path: string, atime: Date, mtime: Date, callback?: (err?: any) => void): void;

        utimesSync(path: string, atime: number, mtime: number): void {
            // TODO
        }

        // utimesSync(path: string, atime: Date, mtime: Date): void;

        futimes(fd: number, atime: number, mtime: number, callback?: (err?: any) => void): void {
            this.futimesSync(fd, atime, mtime);
            if (callback) {
                callback(undefined);
            }
        }

        // futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: any) => void): void;

        futimesSync(fd: number, atime: number, mtime: number): void {
            // TODO
        }

        // futimesSync(fd: number, atime: Date, mtime: Date): void;

        fsync(fd: number, callback?: (err?: any) => void): void {
            this.fsyncSync(fd);
        }

        fsyncSync(fd: number): void {
        }

        // write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: any, written: number, buffer: Buffer) => void): void;

        // writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;

        // read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: any, bytesRead: number, buffer: Buffer) => void): void;

        // readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;

        readFile(filename: string, encoding: string, callback: (err: any, data: string) => void): void {
            let data = this.readFileSync(filename, encoding);
            if (callback) {
                callback(undefined, data);
            }
        }

        // readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: any, data: string) => void): void;

        // readFile(filename: string, options: { flag?: string; }, callback: (err: any, data: Buffer) => void): void;

        // readFile(filename: string, callback: (err: any, data: Buffer) => void ): void;

        readFileSync(filename: string, encoding: string): string {
            let data: string = '';
            if (WshNjs.wsh_fs.GetFile(filename).Size > 0) {
                let reader: any = WshNjs.wsh_fs.OpenTextFile(filename, ForReading, false);
                data = reader.ReadAll();
                reader.Close();
            }
            return data;
        }

        // readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;

        // readFileSync(filename: string, options?: { flag?: string; }): Buffer;

        // writeFile(filename: string, data: any, callback?: (err: any) => void): void;

        // writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: any) => void): void;

        writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: any) => void): void {
            this.writeFileSync(filename, data, options);
            if (callback) {
                callback(undefined);
            }
        }

        // writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;

        writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void {
            let writer: any = WshNjs.wsh_fs.OpenTextFile(filename, ForWriting, true);
            writer.Write(data);
            writer.Close();
        }

        // appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: any) => void): void;

        appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: any) => void): void {
            this.appendFileSync(filename, data, options);
            if (callback) {
                callback(undefined);
            }
        }

        // appendFile(filename: string, data: any, callback?: (err: any) => void): void;

        // appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;

        appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void {
            let writer: any = WshNjs.wsh_fs.OpenTextFile(filename, ForAppending, true);
            writer.Write(data);
            writer.Close();
        }

        // watchFile(filename: string, listener: (curr: wshnjs_fs_stats, prev: wshnjs_fs_stats) => void): void;

        // watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: wshnjs_fs_stats, prev: wshnjs_fs_stats) => void): void;

        // unwatchFile(filename: string, listener?: (curr: wshnjs_fs_stats, prev: wshnjs_fs_stats) => void): void;

        // watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;

        // watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;

        exists(path: string, callback?: (exists: boolean) => void): void {
            if (callback) {
                callback(this.existsSync(path));
            }
        }

        existsSync(path: string): boolean {
            if (WshNjs.wsh_fs.FileExists(path)) {
                return true;
            } else if (WshNjs.wsh_fs.FolderExists(path)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
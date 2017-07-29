CScript.exe //E:JScript //Nologo "%~dp0..\build\TypeScript-1.8.10\lib\tsc.js" ^
    --target ES3 ^
    --out js\main.js ^
    src\wsh\polyfills.ts ^
    src\wsh\constants.ts ^
    src\wshnjs\os.ts ^
    src\wshnjs\path.ts ^
    src\wshnjs\fs.ts ^
    src\wshnjs\child_process.ts ^
    src\utils\unzip.ts ^
    src\utils\mht.ts ^
    src\main.ts

@ECHO done

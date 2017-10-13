CScript.exe //E:JScript //Nologo "%~dp0..\build\TypeScript-1.8.10\lib\tsc.js" ^
    --target ES3 ^
    --out test.js ^
    src\wshnjs\core\constants.ts ^
    src\wshnjs\core\objects.ts ^
    src\wshnjs\core\scheduler.ts ^
    src\wshnjs\core\polyfills.ts ^
    src\wshnjs\core\browser.ts ^
    src\wshnjs\os.ts ^
    src\wshnjs\path.ts ^
    src\wshnjs\process.ts ^
    src\wshnjs\fs.ts ^
    src\wshnjs\child_process.ts ^
    src\wshnjs\require.ts ^
    src\wshutil\unzip.ts ^
    src\wshutil\sax.ts ^
    src\wshutil\mht.ts ^
    test\main.ts

@ECHO done

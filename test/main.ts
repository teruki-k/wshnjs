let child_process = require('child_process');
let fs = require('fs');
let os = require('os');
let path = require('path');
let process = require('process');

child_process.exec('ECHO hoge fuga piyo', {}, (error, stdout, stderr) => {
    alert('---- 1 stdout begin');
    alert(stdout);
    alert('---- 1 stdout end');
});

child_process.exec('powershell.exe -NoProfile -ExecutionPolicy Unrestricted -Command "[System.IO.Ports.SerialPort]::GetPortNames()"', {}, (error, stdout, stderr) => {
    alert('---- 2 stdout begin');
    alert(stdout);
    alert('---- 2 stdout end');
});

let stdout = child_process.execSync('powershell.exe -NoProfile -ExecutionPolicy Unrestricted -Command "[System.IO.Ports.SerialPort]::GetPortNames()"');
alert('---- 3 stdout begin');
alert(stdout);
alert('---- 3 stdout end');

fs.writeFile('hoge.txt', 'asdf asdf asdf', {}, (err) => {
    fs.readFile('hoge.txt', 'utf-8', (err, data) => {
        alert('---- 4 data begin');
        alert(data);
        alert('---- 4 data end');
        fs.unlink('hoge.txt', (err) => { });
    });
});

setTimeout(() => {
    alert('argv: ' + process.argv.join(', '));
    alert('execArgv: ' + process.execArgv.join(', '));
    alert('argv0: ' + process.argv0);
    alert('cwd: ' + process.cwd());
}, 1000);
process.exit(0);

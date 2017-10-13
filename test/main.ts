let child_process = require('child_process');
let fs = require('fs');
let os = require('os');
let path = require('path');
let process = require('process');

child_process.exec('cd', {}, (error, stdout, stderr) => {
    alert(stdout);
});
child_process.exec('powershell.exe -NoProfile -ExecutionPolicy Unrestricted -Command "[System.IO.Ports.SerialPort]::GetPortNames()"', {}, (error, stdout, stderr) => {
    alert(stdout);
});

fs.writeFile('hoge.txt', 'asdf asdf asdf', {}, (err) => {
    fs.readFile('hoge.txt', 'utf-8', (err, data) => {
        alert(data);
        fs.unlink('hoge.txt', (err) => {
        });
    });
});

setTimeout(() => {
    alert('argv: ' + process.argv.join(', '));
    alert('execArgv: ' + process.execArgv.join(', '));
    alert('argv0: ' + process.argv0);
    alert('cwd: ' + process.cwd());
}, 1000);
process.exit(0);

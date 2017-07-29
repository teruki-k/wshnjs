//alert("a,,b,,c".split(/,/).join('-'));

var child_process = new wshnjs_child_process();
var os = new wshnjs_os();
var fs = new wshnjs_fs();
var path = new wshnjs_path();

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


var unzip = new utils_unzip();
var mht = new utils_mht();
var html = new Array();
html.push('<!DOCTYPE html>');
html.push('<html>');
html.push('<head>');
html.push('<title>MHT output sample</title>');
html.push('</head>');
html.push('<body>');
html.push('</body>');
html.push('<html>');
fs.writeFile('tmp.html', html.join('\n'), {}, (err) => {
    mht.save('tmp.html', 'tmp.mht');
    new ActiveXObject('WScript.Shell').Run('tmp.mht');
});

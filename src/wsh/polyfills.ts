if (typeof (document) === 'undefined') {
    eval("document = new ActiveXObject('htmlfile')");
    eval("document.write('<html/>');");
    if (typeof (alert) === 'undefined') {
        eval("alert = function(message) { WScript.Echo(message); };");
    }
}

if (typeof (window) === 'undefined') {
    eval("window = document.parentWindow;");
    if (typeof (alert) === 'undefined') {
        eval("alert = window.alert;");
    }
}

if (typeof (setTimeout) === 'undefined') {
    eval("setTimeout = window.setTimeout;");
}

if (typeof (clearTimeout) === 'undefined') {
    eval("clearTimeout = window.clearTimeout;");
}

if (typeof (setInterval) === 'undefined') {
    eval("setInterval = window.setInterval;");
}

if (typeof (clearInterval) === 'undefined') {
    eval("clearInterval = window.clearInterval;");
}

if (typeof (Date.now) === 'undefined') {
    eval("Date.now = function() { return new Date().getTime(); };");
}

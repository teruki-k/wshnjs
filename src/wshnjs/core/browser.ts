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

function WshNjsSetTimeout(func: any, delay?: number) {
    let task: WshNjs.Task = new WshNjs.TimerTask(() => {
        func();
    }, delay);
    WshNjs.scheduler.addTask(task);
    WshNjs.scheduler.schedule();
    return task.getId();
}

function WshNjsClearTimeout(timeoutID: number) {
    WshNjs.scheduler.killTask(timeoutID);
    WshNjs.scheduler.schedule();
};

function WshNjsSetInterval(func: any, delay?: number) {
    let task: WshNjs.Task = new WshNjs.IntervalTask(() => {
        func();
    }, delay);
    WshNjs.scheduler.addTask(task);
    WshNjs.scheduler.schedule();
    return task.getId();
};

function WshNjsClearInterval(intervalID: number) {
    WshNjs.scheduler.killTask(intervalID);
    WshNjs.scheduler.schedule();
};

if (typeof (setTimeout) === 'undefined') {
    if (typeof (WScript) === 'undefined') {
        eval("setTimeout = window.setTimeout;");
    } else {
        eval("setTimeout = WshNjsSetTimeout;");
    }
}

if (typeof (clearTimeout) === 'undefined') {
    if (typeof (WScript) === 'undefined') {
        eval("clearTimeout = window.clearTimeout;");
    } else {
        eval("clearTimeout = WshNjsClearTimeout;");
    }
}

if (typeof (setInterval) === 'undefined') {
    if (typeof (WScript) === 'undefined') {
        eval("setInterval = window.setInterval;");
    } else {
        eval("setInterval = WshNjsSetInterval;");
    }
}

if (typeof (clearInterval) === 'undefined') {
    if (typeof (WScript) === 'undefined') {
        eval("clearInterval = window.clearInterval;");
    } else {
        eval("clearInterval = WshNjsClearInterval;");
    }
}
interface Date {
    now(): number;
}
if (typeof (Date.now) === 'undefined') {
    Date.now = () => {
        return new Date().getTime();
    };
}

// Array.prototype.filter from MDN
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp */) {
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this),
            len = t.length >>> 0;
        if (typeof fun != 'function') {
            throw new TypeError();
        }
        var res = [],
            thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];
                if (fun.call(thisp, val, i, t)) {
                    res.push(val);
                }
            }
        }
        return res;
    };
}

// Array.prototype.map from MDN
if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        var T, A, k;
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        A = new Array(len);
        k = 0;
        while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}

// Array.prototype.reduce from MDN
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(accumulator) {
        if (this === null || this === undefined) {
            throw new TypeError('Object is null or undefined');
        }
        var i = 0, l = this.length >> 0, curr;
        if (typeof accumulator !== 'function') {
            throw new TypeError('First argument is not callable');
        }
        if (arguments.length < 2) {
            if (l === 0) {
                throw new TypeError('Array length is 0 and no second argument');
            }
            curr = this[0];
            i = 1;
        } else {
            curr = arguments[1];
        }
        while (i < l) {
            if (i in this) {
                curr = accumulator.call(undefined, curr, this[i], i, this);
            }
            ++i;
        }
        return curr;
    };
}

interface String {
    endsWith(searchString: string, position?: number): boolean;
    contains(search: string, start?: number): boolean;
    includes(search: string, start?: number): boolean;
    startsWith(searchString: string, position?: number): boolean;
};

// String.prototype.endsWith from MDN
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

// String.prototype.includes from MDN
if (!String.prototype.contains) {
    String.prototype.contains = function (search, start) {
        if (typeof (start) !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// String.prototype.includes from MDN
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        if (typeof (start) !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// String.prototype.startsWith from MDN
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}

// String.prototype.trim from MDN
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
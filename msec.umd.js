(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.msec = factory());
}(this, (function () { 'use strict';

    function msec (time) {
        return ("" + (time || ''))
        .toLowerCase()
        .split(/\s+/)
        .reduce(function (res, curr) {
            var num = (parseInt(curr) || 0);
            var last = curr.substr(-1);

            if (last === 'd') {
                return res + num * 864e5;
            }

            if (last === 'h') {
                return res + num * 36e5;
            }

            if (last === 'm') {
                return res + num * 6e4;
            }

            if (last === 's') {
                return res + num * 1e3;
            }

            return res + num;
        }, 0);
    }

    return msec;

})));

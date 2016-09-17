'use strict';

export default (time) => {
    return `${time || ''}`
    .toLowerCase()
    .split(/\s+/)
    .reduce((res, curr) => {
        let num = (parseInt(curr) || 0)
            , last = curr.substr(-1);

        if (last == 'd') {
            return res + num * 864e5;
        }

        if (last == 'h') {
            return res + num * 36e5;
        }

        if (last == 'm') {
            return res + num * 6e4;
        }

        if (last == 's') {
            return res + num * 1e3;
        }

        return res + num;
    }, 0);
};
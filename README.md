## msec

string to milliseconds parser

#### Usage
```javascript
'use strict';

let msec = require('msec');

setTimeout(() => {
    console.log('I execute after 1d 2h 37m 15s');
}, msec('1d 2h 37m 15s'));

setInterval(() => {
    console.log('I execute every 2 hours');
}, msec('2h'));

setTimeout(() => {
    console.log('I execute after 1h 3m 15s');
}, msec('5s 10s 1h 3m'));

new Date(Date.now() + msec('2d')); // same time, 2 days later

new Date(Date.now() + msec('2d 4h')); // 2 days and 4 hours later
```

#### Install (NPM)
```bash
$ npm install --save msec
```

#### Install (NPM)
```bash
$ bower install --save msec
```

#### Test
```bash
$ npm install && npm test
```

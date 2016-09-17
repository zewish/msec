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
```

#### Install (NPM)
```bash
$ npm install --save msec
```

#### Install (Bower)
```bash
$ npm install --save msec
```

#### Test
```bash
$ npm install && npm test
```

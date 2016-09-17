import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/msec.js'
    , format: 'umd'
    , moduleName: 'msec'
    , plugins: [ buble() ]
    , dest: 'msec.js'
};
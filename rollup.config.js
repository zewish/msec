import buble from 'rollup-plugin-buble';

export default {
    input: 'src/msec.js',
    output: {
        format: 'umd',
        name: 'msec',
        file: 'msec.js'
    },
    plugins: [ buble() ],
};

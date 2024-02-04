// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/main.ts',
	output: [
        {
		    file: 'dist/cjs/index.js',
		    format: 'cjs'
	    },
        {
            file: 'dist/es/index.js',
            format: 'es'
        }
    ],
    plugins: [typescript()]
};
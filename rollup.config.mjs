// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/main.ts',
	output: [
        {
		    file: 'dist/index.js',
		    format: 'cjs',
            exports: 'named',
            sourcemap: true
	    },
        {
            file: 'dist/index.mjs',
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [typescript()]
};
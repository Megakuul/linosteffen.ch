import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import cdn from 'rollup-plugin-cdn';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'src/index.js',
      format: 'esm',
    },
    plugins: [
        typescript(),
        resolve(),
        cdn(),
        terser(),
    ],
  },
];
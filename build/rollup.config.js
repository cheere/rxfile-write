import nodeResolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

import commonjs from '@rollup/plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
const path = require('path')
const config = require('./config')
const { configVersion } = require('./util.config')

const env = {
  '__VERSION__': JSON.stringify(configVersion),
}

export default {
  input: path.resolve(__dirname, '..', 'src/index.js'),
  output: [
    ...config
  ],
  // sourceMap: true,
  plugins: [
    replace(env),
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    globals(),
    builtins(),
    terser(),
  ],
  external: ['path', 'fs'],
};
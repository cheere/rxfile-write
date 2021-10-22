const path  = require('path')
const { configBanner } = require('./util.config')

module.exports = [
  {
    file: path.resolve(__dirname, '..', 'dist/index.js'),
    format: 'cjs',
    name: 'rxfile-write.cjs', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: path.resolve(__dirname, '..', 'dist/rxfile-write.cjs.js'),
    format: 'cjs',
    name: 'rxfile-write.cjs', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: path.resolve(__dirname, '..', 'dist/rxfile-write.amd.js'),
    format: 'amd',
    name: 'rxfile-write.amd', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: path.resolve(__dirname, '..', 'dist/rxfile-write.umd.js'),
    format: 'umd',
    name: 'rxfile-write.umd', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
]
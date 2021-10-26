const path  = require('path')
const { configBanner } = require('./util.config')

const FilePath = (p) => path.resolve(__dirname, '..', p)

module.exports = [
  {
    file: FilePath('dist/index.js'),
    format: 'cjs',
    name: 'rxfile-write.cjs', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: FilePath('dist/rxfile-write.cjs.js'),
    format: 'cjs',
    name: 'rxfile-write.cjs', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: FilePath('dist/rxfile-write.amd.js'),
    format: 'amd',
    name: 'rxfile-write.amd', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: FilePath('dist/rxfile-write.umd.js'),
    format: 'umd',
    name: 'rxfile-write.umd', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
]
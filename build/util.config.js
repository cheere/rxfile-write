/**
 * 当前 打包时的，环境变量
 * -------------------------
 * 1、版本
 * 2、更新时间
 * 3、js 文件，注释内容
 */
 const { version } = require('../package.json')

const FormatDateString = (time, format = 'YY-MM-DD hh:mm:ss') => {
  const date = new Date(time);

  const year = date.getFullYear()
  const month = date.getMonth() + 1;// 月份是从0开始的
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const preArr = Array.apply(null, Array(10)).map(function(elem, index) {
      return '0' + index
  }); // 开个长度为10的数组 格式为 00 01 02 03

  const newTimeString = format.replace(/YY/g, year)
                            .replace(/MM/g, preArr[month] || month)
                            .replace(/DD/g, preArr[day] || day)
                            .replace(/hh/g, preArr[hour] || hour)
                            .replace(/mm/g, preArr[min] || min)
                            .replace(/ss/g, preArr[sec] || sec);

  return newTimeString;
}

const now = new Date()
const configCurrentTime = FormatDateString(now)

const configCurrentYear = FormatDateString(now, 'YY')

// console.log('webpack->version=', version)
const configBanner = `
/*!
 * rxfile-write
 * version: ${version}
 * repo: https://github.com/cheere/rxfile-write
 * build: ${configCurrentTime}
 */
`

// console.log('version=>', version)
// console.log('configBanner=>', configBanner)

const configVersion = version
module.exports = {configVersion, configBanner, configCurrentTime, configCurrentYear}

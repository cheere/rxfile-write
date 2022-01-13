import fs from 'fs'
import path from 'path'

const LibW = {}

/**
 * 往文件里面擦除式写内容
 * Erase write content to file
 * @param {string} filePath
 * @param {string | buffer} text
 * @returns Promise
 */
LibW.write = function (filePath, text) {
  return this.writeTo(filePath, text)
}
LibW.writeSync = function (filePath, text) {
  doWriteSync(this, filePath, text)
}

/**
 * Add content to a file
 * @param {string} filePath
 * @param {string | buffer} text
 * @returns Promise
 */
LibW.writeAppend = function (filePath, text) {
  return this.writeTo(filePath, text, true)
}
LibW.writeAppendSync = function (filePath, text) {
  doWriteSync(this, filePath, text, true)
}

/**
 * Write content to file
 * @param {string} filePath
 * @param {string | buffer} text
 * @param {bool} isAppend
 * @returns Promise
 */
LibW.writeTo = function (filePath, text, isAppend = false) {
  const that = this
  return new Promise((resolve, reject) => {
    const dirPath = path.dirname(filePath)
    if (!this.isData(text)) {
      reject(this.error('text not `string or buffer` ', 'writeTo'))
      return
    }
    that.exists(dirPath).then(() => {
      doWrite(filePath, text, isAppend).then(resolve).catch(reject);
    }).catch(() => {
      doMkdir(dirPath).then(() => {
        doWrite(filePath, text, isAppend).then(resolve).catch(reject);
      }).catch(reject)
    })
  })
}

const MODE_0755 = parseInt('0755', 8)
const MODE_0666 = parseInt('0666', 8)
function doMkdir(filePath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(filePath, { mode: MODE_0755, flag: 'w+' }, function (error) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

function doWrite(filePath, text, isAppend = false) {
  let flag = 'w+'
  let todo = fs.writeFile
  if (isAppend) {
    todo = fs.appendFile
    flag = 'as+'
  }
  return new Promise((resolve, reject) => {
    // http://nodejs.cn/api/fs.html#fs_file_system_flags
    todo(filePath, text, { encoding: 'utf8', mode: MODE_0666, flag }, function (error) {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

function doWriteSync(that, filePath, text, isAppend = false) {
  let result = true
  let flag = 'w+'
  let todo = fs.writeFileSync
  if (isAppend) {
    todo = fs.appendFileSync
    flag = 'as+'
  }

  try {
    const dirPath = path.dirname(filePath)
    console.log('dirPath=', dirPath)
    const dirInfo = that.mkdirsSync(dirPath)
    if (!dirInfo) {
      result = false
    } else {
      todo(filePath, text, { encoding: 'utf8', mode: MODE_0666, flag })
    }
  } catch (error) {
    result = false
    console.error(error)
  }
  return result
}

export default LibW
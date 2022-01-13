import fs from 'fs'
import path from 'path'

const LibEs = {}

/**
 * Determine whether the file/directory exists
 * @param {string} filePath
 * @returns Promise
 */
LibEs.exists = function (filePath) {
  const _that = this
  return new Promise((resolve, reject) => {
    if (!_that.isString(filePath)) {
      reject(_that.error('RxfileWrite-exist=> filePath undefined or null'))
      return
    }
    fs.stat(filePath, (error, stats) => {
      if (error) {
        reject(error)
      } else {
        if (stats.isDirectory()) {
          resolve({ dir: true, file: false })
        } else if (stats.isFile()) {
          resolve({ dir: false, file: true })
        } else {
          reject(_that.error('RxfileWrite-exist=> stats not dir/file'))
        }
      }
    })
  })
}

LibEs.existsSync = function (filePath) {
  const _that = this
  if (!_that.isString(filePath)) {
    _that.error('RxfileWrite-existsSync=> filePath undefined')
    return { dir: false, file: false }
  }

  try {
    const dirPath = path.dirname(filePath)
    const dirInfo = fs.existsSync(dirPath)
    if (!dirInfo) {
      return { dir: false, file: false }
    }
    const fileInfo = fs.statSync(filePath)
    if (fileInfo.isDirectory()) {
      return { dir: true, file: false }
    } else if (fileInfo.isFile()) {
      return { dir: false, file: true }
    } else {
      _that.error('RxfileWrite-exist=> stats not dir/file')
      return { dir: false, file: false }
    }
  } catch (error) {
    if (_that.errorShow) {
      console.log(this.error(error, 'exists try-catch error'))
    }
    return { dir: false, file: false }
  }
}

export default LibEs
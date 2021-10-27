import fs from 'fs'

const LibEs = {}

/**
 * Determine whether the file/directory exists
 * @param {string} path
 * @returns Promise
 */
LibEs.exists = function (path) {
  const _that = this
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(_that.error('rxrrw-exist=> path undefined'))
      return
    }
    fs.stat(path, (error, stats) => {
      if (error) {
        reject(error)
      } else {
        if (stats.isDirectory()) {
          resolve({ dir: true, file: false })
        } else if (stats.isFile()) {
          resolve({ dir: false, file: true })
        } else {
          reject(_that.error('rxrrw-exist=> stats not dir/file'))
        }
      }
    })
  })
}


LibEs.existsSync = function (path) {
  const _that = this
  if (!path) {
    reject(_that.error('rxrrw-existsSync=> path undefined'))
    return
  }
  const fileInfo = fs.statSync(path)
  if (fileInfo.isDirectory()) {
    return { dir: true, file: false }
  } else if (fileInfo.isFile()) {
    return { dir: false, file: true }
  } else {
    _that.error('rxrrw-exist=> stats not dir/file')
    return { dir: false, file: false }
  }
}

export default LibEs
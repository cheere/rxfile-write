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

export default LibEs
import fs from 'fs'

const LibRm = {}

/**
 * Delete file/directory
 * @param {string} path
 * @returns Promise
 */
LibRm.remove = function (path) {
  const _that = this
  return new Promise((resolve, reject) => {
    _that.exists(path).then(() => {
      remove(path).then(() => {
        resolve()
      }).catch((error) => {
        reject(error)
      })
    }).catch((error) => {
      reject(error)
    })
  })
}

function remove(path) {
  const _that = this
  return new Promise((resolve, reject) => {
    try {
      if (fs.statSync(path).isDirectory()) {
        delDir(path); // Delete folder recursively
        _that.deleteDir(path)
      } else {
        fs.unlinkSync(path); // Delete file
      }
      resolve()
    } catch (error) {
      // console.log('RxfileWrite-remove=> error=', error)
      reject(error)
    }
  })
}

export default LibRm
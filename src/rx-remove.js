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
      remove(_that,path).then(resolve).catch(reject)
    }).catch((error) => {
      reject(error)
    })
  })
}

function remove(that, path) {
  return new Promise((resolve, reject) => {
    try {
      if (fs.statSync(path).isDirectory()) {
        that.deleteDir(path) // Delete folder recursively
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
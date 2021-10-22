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
  return new Promise((resolve, reject) => {
    try {
      if (fs.statSync(path).isDirectory()) {
        delDir(path); // Delete folder recursively
      } else {
        fs.unlinkSync(path); // Delete file
      }
      resolve()
    } catch (error) {
      console.log('rxrrw-remove=> error=', error)
      reject(error)
    }
  })
}

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // Delete folder recursively
      } else {
        fs.unlinkSync(curPath); // Delete file
      }
    });
    fs.rmdirSync(path);
  }
}

export default LibRm
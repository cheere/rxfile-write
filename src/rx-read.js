import fs from 'fs'

const LibR = {}

/**
 * Read everything in the file
 * @param {string} path
 * @returns Promise
 */
LibR.read = function (path) {
  const _that = this
  return new Promise((resolve, reject) => {
    _that.exists(path).then(() => {
      readData(path).then(resolve).catch(reject)
    }).catch((error) => {
      reject(error)
    })
  })
}

function readData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export default LibR
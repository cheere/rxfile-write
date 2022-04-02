import fs from 'fs'
const LibCp = {}

/**
 * copy file
 * @param {string} srcPath
 * @param {string} destPath
 * @returns Promise
 */
 LibCp.cp = function (srcPath, destPath) {
  const _that = this
  return new Promise((resolve, reject) => {
    _that.exists(srcPath).then((res) => {
      if (res.dir) {
        _that.loopCp(srcPath, destPath).then(resolve).catch(reject)
      } else if (res.file) {
        cpFile(srcPath, destPath).then(() => {
          resolve('')
        }).catch((error) => {
          reject(error)
        })
      }
      else {
        reject('fileInfo type unknow')
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

LibCp.cpSync = function (srcPath, destPath) {
  const _that = this
  const fileInfo = this.existsSync(srcPath)
  if (fileInfo.file) {
    return cpFileSync(srcPath, destPath)
  } else if (fileInfo.dir) {
    return _that.loopCpSync(srcPath, destPath)
  } else {
    return false
  }
}

function cpFile(srcPath, destPath) {
  return new Promise((resolve, reject) => {
    fs.copyFile(srcPath, destPath, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve('')
      }
    })
  })
}

function cpFileSync(srcPath, destPath) {
  try {
    fs.copyFileSync(srcPath, destPath)
  } catch (error) {
    return false
  }
  return true
}

export default LibCp
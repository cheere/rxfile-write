import fs from 'fs'
import path from 'path'

const LibLoop = {}
LibLoop.loopCpSync = function (srcPath, destPath) {
  const _that = this
  const res = _that.existsSync(srcPath)
  let result = false
  if (res.dir) {
    DestPathExit(destPath)
    let RootDestPath = destPath
    fs.readdirSync(srcPath).forEach(file => {
      const fullPath = path.resolve(srcPath, file)
      const fileInfo = fs.statSync(fullPath)
      RootDestPath = path.resolve(destPath, file)
      if (fileInfo.isDirectory()) {
        return _that.loopCpSync(fullPath, RootDestPath)
      } else if (fileInfo.isFile()) {
        result = _that.cpSync(fullPath, RootDestPath)
      }
    })
  } else {
    result = _that.cpSync(srcPath, destPath)
  }
  return result
}

LibLoop.loopCp = function (srcPath, destPath) {
  const _that = this
  return new Promise((resolve, reject) => {
    _that.exists(srcPath).then(res => {
      if (res.dir) {
        DestPathExit(destPath)
        let RootDestPath = destPath
        let errorMsg = ''
        fs.readdirSync(srcPath).forEach(file => {
          const fullPath = path.resolve(srcPath, file)
          const fileInfo = fs.statSync(fullPath)
          let result = false
          RootDestPath = path.resolve(destPath, file)
          if (fileInfo.isDirectory()) {
            result = _that.loopCpSync(fullPath, RootDestPath)
          } else if (fileInfo.isFile()) {
            result = _that.cpSync(fullPath, RootDestPath)
          }
          if (result) {
            if (errorMsg) errorMsg += '\n'
            errorMsg += 'error-loopCp: file='+ file + '__fullPath='+fullPath
          }
        })
        resolve(errorMsg)
      } else if (res.file) {
        _that.cp(srcPath, destPath).then(resolve).catch(reject)
      } else {
        reject('fileInfo type unknow')
      }
    }).catch(error => {
      reject(error)
    })
  })
}

function DestPathExit(destPath) {
  try {
    const fileInfo = fs.statSync(destPath)
    if (!fileInfo.isDirectory() && !fileInfo.isFile()) {
      fs.mkdirSync(destPath)
    }
  } catch (error) {
    fs.mkdirSync(destPath)
  }
}

export default LibLoop

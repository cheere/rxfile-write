import fs from 'fs'
import path from 'path'
const LibUtils = {}

LibUtils.isUndef = function(v) {
  return v === undefined || v === null
}

LibUtils.isTrue = function(v) {
  return v === true
}

LibUtils.isFalse = function(v) {
  return v === false
}

LibUtils.isString = function (v) {
  if (v && typeof v === 'string') {
    return true
  }
  return false
}

LibUtils.isObject = function (v) {
  if (v && typeof v === 'object') {
    return true
  }
  return false
}

LibUtils.isData = function (v) {
  if (this.isUndef(v) || typeof v === 'string' || (v && Buffer.isBuffer(v))) {
    return true
  }
  return false
}

LibUtils.deleteDir = function(fpath) {
  let files = [];
  if (fs.existsSync(fpath)) {
    files = fs.readdirSync(fpath);
    files.forEach((file) => {
      const curPath = fpath + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        this.deleteDir(curPath); // Delete folder recursively
      } else {
        fs.unlinkSync(curPath); // Delete file
      }
    });
    fs.rmdirSync(fpath);
  }
}

// 异步
LibUtils.mkdirs = function (dirPath, callback) {
  this.exists(dirPath).then(info => {
    if (info.dir) {
      callback && callback()
    } else {
      this.mkdirs(path.dirname(dirPath), () => {
        fs.mkdir(dirPath, callback)
      })
    }
  })
}

LibUtils.mkdirsSync = function (dirPath) {
  if (fs.existsSync(dirPath)) {
    return true
  } else {
    if (this.mkdirsSync(path.dirname(dirPath))) {
      fs.mkdirSync(dirPath)
      return true
    }
  }
}

export default LibUtils
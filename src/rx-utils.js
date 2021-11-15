import fs from 'fs'
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
  if (v && (typeof v === 'string' || Buffer.isBuffer(v))) {
    return true
  }
  return false
}

LibUtils.deleteDir = function(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        this.deleteDir(curPath); // Delete folder recursively
      } else {
        fs.unlinkSync(curPath); // Delete file
      }
    });
    fs.rmdirSync(path);
  }
}

export default LibUtils
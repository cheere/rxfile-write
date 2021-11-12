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
  if (!this.isUndef(v) && typeof v === 'string') {
    return true
  }
  return false
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

export default LibUtils
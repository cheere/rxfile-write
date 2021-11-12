const LibEr = {}

/**
 * error log
 * --- For internal use only
 * @param {string} error
 * @returns Error
 */
LibEr.error = function (error, log) {
  log = log || ''
  if (!error) {
    error = 'unknow'
  } else if (typeof error === 'object') {
    return error
  }
  const errLog = 'RxfileWrite-error=> ' + log + ' -> ' + error
  const e = new Error(errLog)
  let stack = e.stack
  if (stack) {
    const sArray = stack.split('at')
    const len = sArray.length
    const startArray = []
    const mindArray = []
    const lastArray = []
    let next = true
    for (let i = 0; i < len; i = i + 2) {
      let space = sArray[i] || ''
      let msg = i + 1 < len ? sArray[i + 1] : ''
      if (i !== 0) {
        space = 'at' + space
        msg = 'at' + msg
      }
      const newSingleStack = msg ? msg + space : space
      if (i === 0) {
        startArray.push(space)
        mindArray.push('at' + msg)
      }
      else if (space && (isRXFW(space) || isRXFW(msg))) {
        mindArray.push(newSingleStack)
      } else {
        if (next) {
          next = false
          mindArray.push(space)
          lastArray.push(msg)
        } else {
          lastArray.push(newSingleStack)
        }
      }
    }
    const reverseArr = mindArray.reverse()
    const newArray = startArray.concat(reverseArr).concat(lastArray)
    const newStack = newArray.join('')
    e.stack = newStack
  }
  return e
}

function isRXFW(v) {
  if (v && (v.indexOf('rxfile-write.js') >= 0)) {
    return true
  }
  return false
}

export default LibEr
const LibEr = {}

/**
 * error log
 * --- For internal use only
 * @param {string} error
 * @returns Error
 */
LibEr.error = function (error) {
  if (error) {
    error = 'unknow'
  } else if (typeof err === 'object') {
    return err
  }
  return new Error('RxfileWrite-error=>' + ' read.js -> ' + err)
}

export default LibEr
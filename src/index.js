import RxError from './rx-error'
import RxExists from './rx-exists'
import RxRead from './rx-read'
import RxCopy from './rx-cp'
import RxWrite from './rx-write'
import RxRemove from './rx-remove'

import RxUtils from './rx-utils'

const LibFile = Object.assign(
  RxExists,
  RxRead,
  RxCopy,
  RxWrite,
  RxRemove,
  RxUtils
)

const RxfileWrite = Object.assign(
  RxError,
  LibFile
)

RxfileWrite.version = '__VERSION__'
// console.log('lib=', lib)
module.exports = RxfileWrite

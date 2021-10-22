import RxError from './rx-error'
import RxExists from './rx-exists'
import RxRead from './rx-read'
import RxWrite from './rx-write'
import RxRemove from './rx-remove'

const LibFile = Object.assign(
  RxExists,
  RxRead,
  RxWrite,
  RxRemove
)

const Rxrrw = Object.assign(
  RxError,
  LibFile
)

Rxrrw.version = '__VERSION__'
// console.log('lib=', lib)
module.exports = Rxrrw

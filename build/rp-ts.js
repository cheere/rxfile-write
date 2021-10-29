const pathResolve = require('path').resolve
const rxfileWrite = require('../dist/rxfile-write')

const DistPath = pathResolve(__dirname, '..', 'dist')
const SrcPath = pathResolve(__dirname, '..', 'index.d.ts')
const DstPath = pathResolve(DistPath, 'rxfile-write.d.ts')

function w() {
  rxfileWrite.exists(SrcPath).then(() => {
    console.log('start write to file...')
    rxfileWrite.read(SrcPath).then(data => {
      console.log('read data len = ', data.length)
      rxfileWrite.write(DstPath, data).then(() => {
        console.log('write to succ')
      })
    })
  })
}

setTimeout(() => {
  w()
}, 1);
const rxfileWrite = require('../dist/index')
// const rxfileWrite = require('rxfile-write') // look d.ts
const path = require('path')

function ps (p) {
  return path.resolve(__dirname, '..', p)
}

rxfileWrite.read(ps('LICENSE')).then(data => {
  console.log('data\n\n', data)
}).catch(err => {
  console.log('read error=', err)
})

rxfileWrite.exists(ps('LICENSE')).then(() => {
  console.log('exists is ok')
}).catch(err => {
  console.log('exists error=', err)
})


const WritePath = ps('ttt.txt')

function rm() {
  setTimeout(() => {
    rxfileWrite.remove(WritePath).then(() => {
      console.log('remove succ')
    }).catch(err => {
      console.log('remove error=', err)
    })
  }, 3000);
}

rxfileWrite.write(WritePath, 'hello world!').then(() => {
  console.log('write succ')

  setTimeout(() => {
    rxfileWrite.writeAppend(WritePath, '11111').then(() => {
      setTimeout(() => {
        rxfileWrite.writeTo(WritePath, '2222', true).then(() => {
          setTimeout(() => {
            rxfileWrite.writeSync(WritePath, '3333')
            rxfileWrite.writeAppendSync(WritePath, '4444')
            rm()
          }, 3000);
        })
      }, 3000);
    })
  }, 2000);

}).catch(err => {
  console.log('write error=', err)
})
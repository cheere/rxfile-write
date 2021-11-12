const RxfileWrite = require('../dist/rxfile-write')
// const RxfileWrite = require('rxfile-write') // look d.ts
const path = require('path')

function ps (p) {
  return path.resolve(__dirname, '..', p)
}

// error
// RxfileWrite.write(ps('a.txt'), {a: 1}).then(() => {
//   console.log('succ')
// }).catch(err => {
//   console.log('error=', err)
// })
// return

RxfileWrite.read(ps('LICENSE')).then(data => {
  console.log('data\n\n', data)
}).catch(err => {
  console.log('read error=', err)
})

RxfileWrite.exists(ps('LICENSE')).then(() => {
  console.log('exists is ok')
}).catch(err => {
  console.log('exists error=', err)
})


RxfileWrite.cp(ps('LICENSE'), ps('new-LICENSE')).then(() => {
  console.log('cp is ok')
  setTimeout(() => {
    RxfileWrite.remove(ps('new-LICENSE')).then(() => {
      console.log('remove cp-LICENSE succ')
    }).catch(err => {
      console.log('remove cp-LICENSE error=', err)
    })
  }, 3000);
}).catch(err => {
  console.log('cp error=', err)
})

const cpRes = RxfileWrite.cpSync(ps('index.d.ts'), ps('test.d.ts'))
if (cpRes) {
  console.log('cpSync is ok')
  setTimeout(() => {
    RxfileWrite.remove(ps('test.d.ts')).then(() => {
      console.log('remove cpSync-test.d.ts succ')
    }).catch(err => {
      console.log('remove cpSync-test.d.ts error=', err)
    })
  }, 3000);
} else {
  console.error('cpSync is false')
}

const WritePath = ps('ttt.txt')

function rm() {
  setTimeout(() => {
    RxfileWrite.remove(WritePath).then(() => {
      console.log('remove succ')
    }).catch(err => {
      console.log('remove error=', err)
    })
  }, 3000);
}

RxfileWrite.write(WritePath, 'hello world!').then(() => {
  console.log('write succ')

  setTimeout(() => {
    RxfileWrite.writeAppend(WritePath, '11111').then(() => {
      setTimeout(() => {
        RxfileWrite.writeTo(WritePath, '2222', true).then(() => {
          setTimeout(() => {
            RxfileWrite.writeSync(WritePath, '3333')
            RxfileWrite.writeAppendSync(WritePath, '4444')
            rm()
          }, 3000);
        })
      }, 3000);
    })
  }, 2000);

}).catch(err => {
  console.log('write error=', err)
})
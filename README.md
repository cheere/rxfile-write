# rxfile-write

[中文](https://github.com/cheere/rxfile-write/blob/main/README_CH.md)

Node.js -> fs: Simple use tool

1. Determine whether the `file`/`directory` exists
1. `Read` everything in the `file`
1. `Erase` write content to file，or `add` content to a file
1. `Delete` file/directory

# Usage
```js
  // node / cjs
  const RxfileWrite = require('rxfile-write')
  // or
  import RxfileWrite from 'rxfile-write'
  const path = require('path')

  function ps (p) {
    return path.resolve(__dirname, '..', p)
  }

  // - - RxfileWrite.read - -
  RxfileWrite.read(ps('LICENSE')).then(data => {
    console.log('data\n\n', data)
  }).catch(err => {
    console.log('read error=', err)
  })

  // - - RxfileWrite.exists - -
  RxfileWrite.exists(ps('LICENSE')).then(() => {
    console.log('exists is ok')
  }).catch(err => {
    console.log('exists error=', err)
  })

  // - - RxfileWrite.write - -
  RxfileWrite.write(ps('ttt.txt'), 'hello world!').then(() => {
    console.log('write succ')

    setTimeout(() => {
      // - - RxfileWrite.remove - -
      RxfileWrite.remove(ps('ttt.txt')).then(() => {
        console.log('remove succ')
      }).catch(err => {
        console.log('remove error=', err)
      })
    }, 5000);

  }).catch(err => {
    console.log('write error=', err)
  })
```

# api
1. exists
1. read
1. cp
1. cpSync
1. write
1. writeSync
1. writeAppend
1. writeAppendSync
1. writeTo
1. remove

# License
[MIT](https://github.com/cheere/rxfile-write/blob/main/LICENSE)
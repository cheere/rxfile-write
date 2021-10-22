# rxfile-write

[中文](https://github.com/cheere/rxfile-write/blob/main/README_CH.md)

1. Determine whether the `file`/`directory` exists
1. `Read` everything in the `file`
1. `Erase` write content to file，or `add` content to a file
1. `Delete` file/directory

# Usage
```js
  // node / cjs
  const rxfileWrite = require('rxfile-write')
  // or
  import rxfileWrite from 'rxfileWrite'
  const path = require('path')

  function ps (p) {
    return path.resolve(__dirname, '..', p)
  }

  // - - rxfileWrite.read - -
  rxfileWrite.read(ps('LICENSE')).then(data => {
    console.log('data\n\n', data)
  }).catch(err => {
    console.log('read error=', err)
  })

  // - - rxfileWrite.exists - -
  rxfileWrite.exists(ps('LICENSE')).then(() => {
    console.log('exists is ok')
  }).catch(err => {
    console.log('exists error=', err)
  })

  // - - rxfileWrite.write - -
  rxfileWrite.write(ps('ttt.txt'), 'hello world!').then(() => {
    console.log('write succ')

    setTimeout(() => {
      // - - rxfileWrite.remove - -
      rxfileWrite.remove(ps('ttt.txt')).then(() => {
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
1. write
1. writeSync
1. writeAppend
1. writeAppendSync
1. writeTo

# License
[MIT](https://github.com/cheere/rxfile-write/blob/main/LICENSE)
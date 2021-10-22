# rxfile-write

[EN](https://github.com/cheere/rxfile-write/blob/main/README.md)

1. 确定 `文件`/`目录` 是否存在
1. 阅读`文件`中的所有内容
1. `擦除`将内容写入文件, 或 将内容`添加`到文件
1. 删除 `文件`/`目录`

# 使用
```js
  // node / cjs
  const rxfileWrite = require('rxfile-write')
  // or
  import rxfileWrite from 'rxfileWrite'
  const path = require('path')

  function ps (p) {
    return path.resolve(__dirname, '..', p)
  }

  // - - rxfileWrite.read 读内容- -
  rxfileWrite.read(ps('LICENSE')).then(data => {
    console.log('data\n\n', data)
  }).catch(err => {
    console.log('read error=', err)
  })

  // - - rxfileWrite.exists 判断是否存在- -
  rxfileWrite.exists(ps('LICENSE')).then(() => {
    console.log('exists is ok')
  }).catch(err => {
    console.log('exists error=', err)
  })

  // - - rxfileWrite.write 写 - -
  rxfileWrite.write(ps('ttt.txt'), 'hello world!').then(() => {
    console.log('write succ')

    setTimeout(() => {
      // - - rxfileWrite.remove 删除 - -
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
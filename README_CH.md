# rxfile-write

[EN](https://github.com/cheere/rxfile-write)

Node.js -> fs: 简单使用工具

1. 确定 `文件`/`目录` 是否存在
1. 阅读`文件`中的所有内容
1. `擦除`将内容写入文件, 或 将内容`添加`到文件
1. 删除 `文件`/`目录`

# 使用
```js
  // node / cjs
  const RxfileWrite = require('rxfile-write')
  // or
  import RxfileWrite from 'RxfileWrite'
  const path = require('path')

  function ps (p) {
    return path.resolve(__dirname, '..', p)
  }

  // - - RxfileWrite.read 读内容- -
  RxfileWrite.read(ps('LICENSE')).then(data => {
    console.log('data\n\n', data)
  }).catch(err => {
    console.log('read error=', err)
  })

  // - - RxfileWrite.exists 判断是否存在- -
  RxfileWrite.exists(ps('LICENSE')).then(() => {
    console.log('exists is ok')
  }).catch(err => {
    console.log('exists error=', err)
  })

  // - - RxfileWrite.write 写 - -
  RxfileWrite.write(ps('ttt.txt'), 'hello world!').then(() => {
    console.log('write succ')

    setTimeout(() => {
      // - - RxfileWrite.remove 删除 - -
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
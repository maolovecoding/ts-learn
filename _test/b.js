process.on('message', (e) => {
  console.log('sub 接收：', e)
})

process.send({ child: 'child' })
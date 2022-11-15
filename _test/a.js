const child_process = require('child_process')
const cp = child_process.fork('./b.js')

cp.on('message',(e)=>{
  console.log('parent 接收 ', e)
})
cp.send({parent: 'parent'})
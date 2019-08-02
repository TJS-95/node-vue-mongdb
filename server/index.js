const express = require('express')
const app = express()

// 启用跨域
app.use(require('cors')())
// 格式化为json格式
app.use(express.json())

// 引入数据库连接文件
require('./plugins/db')(app)
require('./routes/admin')(app)

// 启动3000端口
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
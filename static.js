const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

app.get('/main',function(req,res){
    // res.send('10000')
    res.jsonp({name:'xiaomin',age:20})
})

// 处理404 资源不存在 显示
app.use(function(req,res,next){
    res.status(404).send('404 文件不存在')
})

app.listen(3003)
console.log('running ...',3003)
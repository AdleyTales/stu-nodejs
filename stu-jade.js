const express = require('express')
const app = express()

// 设置模版引擎
app.set('views','./views')
app.set('view engine','jade')

app.get('/',function(req,res){
    res.render('index',{
        title: 'jadedemo',
        msg: 'hello jade!!'
    })
})

app.listen(3000)
console.log('server is running at 3000...')
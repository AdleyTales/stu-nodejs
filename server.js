const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()

app.use(bodyParser.json())

// nodejs CORS跨域解决方案
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.get('/index',function(req,res){

    // console.log(req.params)
    console.log(req.query.id)
    // res.send('Hello express')
    let json = {
        name: 'xiaoming',
        age: 20,
        height: '178cm'
    }
    res.json(json)
})

app.post('/main',function(req,res){
    // console.log(req.query) 
    // console.log(req.params) 
    console.log(req.body.age) 
    res.json({
        success: true,
        state: 10000
    })
})

app.get('/data',function(req,res){
    axios.get('https://sug.so.360.cn/suggest',{
        callback: 'suggest_so',
        encodein: 'utf-8',
        encodeout: 'utf-8',
        format: 'json',
        fields: 'word',
        word: 'dsa'
    })
    .then(function(msg){
        console.log('success:',msg)
    })
    .catch(function(err){
        console.log('err:',err)
    })

    res.send('success')
})

const server = app.listen(3000,function(){
    let host = server.address().address
    let port = server.address().port

    console.log('server is running at http://%s:%s',host,port)
})

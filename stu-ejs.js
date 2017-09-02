const ejs = require('ejs')

var str = '今天好开心啊，买了一个iphone<%= a %>s'
var data = {
    a: 8
}

var text = ejs.render(str,data)
console.log(text)

// ejs原理就是字符串的替换
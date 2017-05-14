'use strict';

var fs = require('fs');

var data = 'hello,Node.js';

// //异步写入文件
// fs.writeFile('output.txt',data,function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('ok.');
//     }
// })//异步的一般都是有回调函数的

//同步写入文件
var fs = require('fs');

var data = 'hello,Node.js';
fs.writeFileSync('syncoutput.txt',data);
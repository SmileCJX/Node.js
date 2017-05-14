'use strict';

//测试1
// var s = 'hello';

// function greet(name){
//     console.log(s + ',' + name + '!');
// }

// function sayHi(){
//     console.log('hi');
// }

// module.exports = {
//     greet,
//     sayHi
// }

//测试2
// process.nextTick(function(){
//     console.log('nextTick callback!');
// })

// console.log('nextTick was set!');

// process.on('exit',function(code){
//     console.log('about to exit with code:' + code)
// })

//测试三
// var fs = require('fs');

// fs.readFile('sample.txt',function(err,data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

var fs = require('fs');
try{
    var data =  fs.readFileSync('sample.txt','utf-8');
    console.log(data);
} catch (err){
    //出错了
}
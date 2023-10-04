const http = require("http");
const emitter = require('events');

emi = new emitter();

emi.on('hello', function(){
    console.log("hello")
})


//создание сервера с использованием модуля http и потоков. 
//request -- поток для чтения
//response -- поток для записи
http.createServer(function(request,response){

}).listen(5000)
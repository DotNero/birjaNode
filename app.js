const http = require("http");
const emitter = require('events');
const express = require('express');
const mysql = require('mysql2');
import config from './config.json';

const app = express();


//обработчики запросов

//аутентификация
app.post('/login',function(request,response)
{
    
})
//обработчик события "/"
app.get('/',function(request,response){
    response.send("<h2>1<h2>")
})



app.listen(5000)


const connection = mysql.createConnection({});







emi = new emitter();

emi.on('hello', function(){
    console.log("hello")
})


//создание сервера с использованием модуля http и потоков. 
//request -- поток для чтения
//response -- поток для записи
// http.createServer(function(request,response){

// }).listen(5000)
const fetch = require('node-fetch');
const express = require('express');

const app = express();

// app.use(express.urlencoded({extended: true})); // 沒有這行，req.body就會是 undefined，無法存取。

const PORT = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.send("Hello!");
});

app.get('/demo', function(req, res){
  fetch('https://jsonplaceholder.typicode.com/todos/1'). //json
  then(resp => resp.json()).
  then(data => {
    console.log(data);
    res.send(data);
  });
})

app.get('/pokemon', function(req, res){
  fetch('https://pokeapi.co/api/v2/pokemon/ditto'). //json
  then(resp => {
    console.log(JSON.stringify(resp, null, 2))
    return resp.json();
  }).
  then(data => {
    // console.log(data);
    res.send(data);
  });
})

app.get('/login', function(req,res){
  res.sendFile(__dirname + '/login.html')
})

app.post('/login', function(req,res){
  // console.log(req);
  // 可以用這行印出 request 來看，headers 那邊的 'Content-Type' 是 'application/x-www-form-urlencoded'
  // 因為 express 預設不知道如何處理這個 urlencoded 類型的資料，所以無法存取。
  // 必須使用 express.urlencoded 這個 middleware

  var email = req.body.email;
  var password = req.body.password;

  res.send(`email: ${email} password: ${password}`);
});

app.listen(PORT, function(){
  console.log(`Listening on ${PORT}`)
});
//server.js
var express = require('express')
var app = express()
var total = 1;
var bodyParser = require('body-parser')
const request = require('request');

        // for every file inside this folder, makes a app.get route
        // also for every request to server, check if request URL resembles file path in ./public
        //if it does, res.sendFile that file, if not, call next()
        app.use(express.static('./public'))

        app.use(bodyParser.urlencoded({
          extended: true
        }))

        app.use(bodyParser.json())


        app.get('/cargo-validator', function(request, response) {
          response.sendFile('./public/a-validator.html', {
            root: './'
          })
        })

        app.post('/validate-cargo', function(request, response) {
          // if (fund<0){
          // console.log("insufficient funds")}
          console.log(request.body);
          console.log("weight" + request.body.weight);
          console.log("fund" + request.body.fund);
          console.log(request.body.stuff[0].item);
          console.log(request.body.stuff[0].numItems);
          if (request.body.weight > 200) console.log("you are over your weight limit")
          if (request.body.fund < 0) console.log("you have run out of funds")
          response.send("got your data!")
        })

        app.get('/hello', function(request, response) {
          response.send("Hello World");
        })

        app.listen(8080, function() {
          console.log('The app is running on 8080');
        })

        app.get('/Home', function(request, response) {
          response.sendFile('./public/index.html', {
            root: './'
          })
          // response.send("Web page made by Alex")
        })

        app.get('/SanFran', function(request, response) {
          response.sendFile('./public/SanFran.html', {
            root: './'
          })
          // response.send("Web page made by Alex")
        })

        app.get('/Boulder', function(request, response) {
          response.sendFile('./public/Boulder.html', {
            root: './'
          })
          // response.send("Web page made by Alex")
        })

        app.get('/NewYork', function(request, response) {
          response.sendFile('./public/NewYork.html', {
            root: './'
          })
        })
        app.get('/Barcelona', function(request, response) {
          response.sendFile('./public/Barcelona.html', {
            root: './'
          })

        })
        app.get('/Rome', function(request, response) {
          response.sendFile('./public/Rome.html', {
            root: './'
          })
          // response.send("Web page made by Alex")
        })

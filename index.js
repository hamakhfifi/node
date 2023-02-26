const express = require('express')
const http = require('http')
const app = express()
const fs = require('fs')


//console.log("HELLO WORLD" )

/* fs.readFileSync('welcome.txt',file=>{
  console.log(file)

}) */

const readFiles = (file) => new Promise((resolve, reject) => {
  fs.readFile(file,{encoding:'utf-8'}, (err,data)=>{
    if(err){
      reject('there is error in file')
    }
    console.log(data)
    resolve(data)
  })
});

readFiles('welcome.txt')

const pass = require('./password-generate')

console.log(pass)

const mailSender = require('./email-sender')
mailSender()

app.get('/', (req, res) => {
  res.send( '<h1>Hello Node!!!!</h1>\n' )
})

app.get('/file', (req,res) => {
  readFiles('welcome.txt').then(data=>{
    res.send(data)
  })
})

var httpServer = http.createServer(app)
httpServer.listen(3000, () => {
  console.log('running server on port 3000')
})
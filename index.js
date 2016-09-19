const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')
const Emitter = require('./server/emitter')

const app = express()
const server = http.Server(app)
const io = new socketIO(server)
const emitter = new Emitter(io)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/startEmitter', (req, res) => {
  emitter.emit(req.body.freq)
  res.sendStatus(200)
})

app.get('/emitterPage', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/emitterPage.html'))
})

app.get('/', (req, res) => {
  res.redirect('/emitterPage')
})

app.use(express.static('styles'))
app.use(express.static('dist'))

server.listen(8080)

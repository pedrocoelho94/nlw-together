const express = require('express')
const route = require('./router')
const path = require('path')

const server = express() // inicia o express

server.set('view engine', 'ejs')

server.use(express.static('public')) // pasta public

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended:true}))

server.use(route)

server.listen(3000, () => console.log('RODANDO'))

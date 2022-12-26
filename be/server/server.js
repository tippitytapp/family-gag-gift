const express = require('express')
const helmet = require('helmet')
const server = express()
const cors = require('cors')
server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({
        api: "Online"
    })
})

module.exports=server;
const express = require('express')
const helmet = require('helmet')
const server = express()
const cors = require('cors')
const router = require("../apis")
server.use(helmet())
server.use(express.json())
server.use(cors())
server.use("/names",router)
server.get('/', (req, res) => {
    res.status(200).json({
        api: "Online"
    })
})

module.exports=server;
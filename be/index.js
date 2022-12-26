require('dotenv').config()
const server = require('./server/server.js')
const colors = require('colors')
const morgan = require('morgan')

const PORT = process.env.PORT
const ENV = process.env.NODE_ENV

if(ENV === 'development'){
    server.use(morgan('dev'))
}

server.listen(PORT, () => {
    console.log(`\n ===== Server running in ${ENV} mode on port ${PORT} ===== \n`.magenta.bold.underline)
})
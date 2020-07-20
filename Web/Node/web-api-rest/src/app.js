const http = require('http')
const express = require('express')
//const status = require('http-status')
const spoilersRoute = require('./routes/spoilers')
const sequelize = require('./database/database')

const app = express()

//const hostname = '127.0.0.1'
//const port = 3000

//app.set('port', port)

app.use(express.json())

app.use('/api', spoilersRoute)

app.use((request, response, next) => {
    response.status(404).send()
})

app.use((error, request, response, next) => {
    response.status(500).json({
        error
    })
})

sequelize.sync({
    force: true
}).then(() => {
    const port = process.env.PORT || 3000

    app.set('port', port)

    const server = http.createServer(app)

    server.listen(port)
})

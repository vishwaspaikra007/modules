const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

const corsOptions = {
    origin: 'http://localhost:3200', // required to access cookie from cross-origin
    credentials: true
}
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/setCookie', (req, res) => {
    res.cookie('cookieBy', 'donain2 hosted on port 3100').send()
    console.log("cookie-set-on-domain-1-on-port-3200")
})

app.use('/showCookie', (req, res) => {
    res.send(req.cookies)
})

app.listen(3100, ()=> {
    console.log("listening on 3100 domain2")
})
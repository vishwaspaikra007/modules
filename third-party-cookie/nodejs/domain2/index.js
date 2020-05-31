const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/setCookie', (req, res) => {
    res.cookie('cookieBy', 'donain2 hosted on port 3100').send()
    console.log("cookie-set-on-domain-1-on-port-3200")
})

app.listen(3100, ()=> {
    console.log("listening on 3100 domain2")
})
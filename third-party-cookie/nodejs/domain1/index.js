const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3200, ()=> {
    console.log("listening on 3200 domain1")
})
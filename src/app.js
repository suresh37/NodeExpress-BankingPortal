const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Index"
    })
})

app.listen(3000, (req, res) => {
    console.log('app: listening on 3000')
})
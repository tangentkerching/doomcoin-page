const path = require('path')
const express = require('express')
const app = express()

var publicDirectoryPath = path.join(__dirname,'../public')
var bootstrapPath = path.join(__dirname,'../node_modules/bootstrap/dist');
var jqueryPath = path.join(__dirname,'../node_modules/jquery/dist')
var pagePilingPath = path.join(__dirname,'../bower_components/pagePiling.js/dist')

app.set('view engine','hbs')

app.use(express.static(bootstrapPath));
app.use('/public',express.static( publicDirectoryPath ))
app.use('/jquery',express.static(jqueryPath));
app.use('/pagepiling',express.static(pagePilingPath))


app.get('',(req, res) => {
    res.render('index')
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
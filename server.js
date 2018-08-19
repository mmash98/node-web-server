const express = require("express");
const hbs = require('hbs')

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) =>{
    // res.send('hello express')
    res.render("home.hbs", {
        pageTitle:'Home page',
        pageMessage:'Welcome to the website'
    })
});

app.get('/about',(req,res) =>{
    res.render('about.hbs')
});

app.get('/maintain',(req,res) =>{
    res.render('maintain.hbs')


});

app.listen(port, () =>{
    console.log('server is up ')
});
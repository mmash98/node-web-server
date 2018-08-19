const express = require("express");
const hbs = require('hbs')

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) =>{
    // res.send('hello express')

    res.send({
    name:"masha"
})
});

app.use((req,res,next)=>{

    res.render('maintain.hbs')

})

app.get('/about',(req,res) =>{
    res.render('about.hbs')


});

app.listen(3000);
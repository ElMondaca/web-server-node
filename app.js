const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log(err);});

//Middleware - Static content
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jorge Mondaca',
        titulo: 'Aprendiendo Node'
    });
    // res.sendFile(__dirname + '/public/back/index.html');
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jorge Mondaca',
        titulo: 'Aprendiendo Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jorge Mondaca',
        titulo: 'Aprendiendo Node'
    });
});

//We use '*' to automaticaly send an error message if the url requested doesnt exists
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () =>{
    console.log(`Escuchando en http://localhost:${port}`);
});

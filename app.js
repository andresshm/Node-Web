const express = require('express')
const app = express();
const hbs = require('hbs');
require('dotenv').config();

// require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static('public'));


app.get('/',  (req, res)=>{
  res.render('home');
});
app.get('/generic',  (req, res)=>{
    res.render('generic');
});

  app.get('/elements',  (req, res)=> {
    res.render('elements');
  });
  app.get('*',  (req, res)=> {
    res.send('404 Page not found')
  });



app.listen(process.env.PORT);
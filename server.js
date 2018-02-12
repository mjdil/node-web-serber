const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(_dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}, ${req.method}, ${req.url}`);
});

//app.use((req, res, next)=> {
//  res.render('maintenance.hbs');
//});

app.use(express.static(_dirname + '/public'));


hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear()
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'home page',
    welcomeMessage: 'welcome to my website',
    currentYear: new Date().getFullYear();
  })
});

app.get('/about', (req, res)=> {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear();
  });
});

app.get('/bad', (req, res) => {
  res.send('error');
});
app.listen(3000);

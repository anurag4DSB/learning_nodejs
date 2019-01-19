const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.')
    }
  });
  next();
});

// app.use((req, res, next) => {
//   var now = new Date().toString();
//   var log = `${now}: Redirected to Maintenance Page`;
//   console.log(log);
//   fs.appendFile('server.log', log + '\n', (err) => {
//     if (err) {
//       console.log('Unable to append to server.log.')
//     }
//   });
//   res.render('maintenance.hbs', {
//     pageTitle: 'Under Maintenace'
//   });
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to the website',
  })
  // res.send('<h1>Hello Express</h1>');
  // res.send({
  //   name: 'Anurag Mittal',
  //   likes: [
  //     'Biking',
  //     'Playing guitar'
  //   ]
  // });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to andle this request.' 
  });
});

app.listen(3000, () => {
  console.log('Server is up at port 3000');
});
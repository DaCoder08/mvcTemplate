const express = require('express');
const app = express();
var routes = require('./routes.js');

// Automatically sets view engine and adds dot notation to app.render
app.use(require('express-edge'));
app.set('views', `${__dirname}/Views`);

app.get('/', (req, res) => {
  res.render('index');
});

app.use(routes)

app.listen(3000);

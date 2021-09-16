const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/collections', (req, res) => {
  res.render('pages/collections');
});

app.get('/details/:id', (req, res) => {
  res.render('pages/detail');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(`Backend running on http://localhost:${PORT}`);
});

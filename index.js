const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/main'))
  .get('/about-us', (req, res) => res.render('pages/about-us'))
  .get('/menu', (req, res) => res.render('pages/menu'))
  .get('/contact-us', (req, res) => res.render('pages/contact-us'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
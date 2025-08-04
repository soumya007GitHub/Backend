const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from express.js!')
})

// app.get('/about', (req, res) => {
//   res.send('About Us!')
// })

// app.get('/contact', (req, res) => {
//   res.send('Contact Us!')
// })

// app.get('/courses/HTML', (req, res) => {
//   res.send('This is html')
// })

// app.get('/courses/css', (req, res) => {
//   res.send('CSS!')
// })


// Instead of creating this all endpoints we can use slug
app.get('/:slug', (req, res) => {
  res.send(`This is ${req.params.slug}`)
  console.log(req.params);
  console.log(req.query);
})

app.get('/:slug/:second', (req, res) => {
  res.send(`This is ${req.params.slug} and ${req.params.second}`)
  console.log(req.params);
  console.log(req.query);
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
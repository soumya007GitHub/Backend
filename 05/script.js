const express = require('express')
const blog = require('./routes/blog');
const app = express()
const port = 3000

// To use post request
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res)=>{
res.send('It"s a post request');
})

app.get('/index', (req, res)=>{
    console.log("Hey it's index");
    res.sendFile('./templates/index.html', {root: __dirname});
})

app.use('/blog', blog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('blog homepage');
})

router.get('/about', (req, res)=>{
    res.send('About us from blog');
})

module.exports = router
const express = require('express');
const router = express.Router();

router.get('/joshy', (req, res)=>{
    res.send('hi joshy mone')
})

module.exports = router;
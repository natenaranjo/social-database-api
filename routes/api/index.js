const router = require('express').Router();

router.use((req, res) => {
    return res.send('Hi, you have reach your route!');
})

module.exports = router;
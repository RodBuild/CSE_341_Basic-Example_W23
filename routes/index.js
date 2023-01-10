const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Sarah Birch');
});
router.use('/contacts', require('./contacts'));

module.exports = router;

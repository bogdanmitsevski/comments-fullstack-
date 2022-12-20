const express = require('express');
const router = express.Router();

router.use('/auth', require('./userRouter'));
router.use('/', require('./contextRouter'));
router.use('/', require('./contextRouter'));

module.exports = router;
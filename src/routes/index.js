const express = require('express');
const router = express.Router();

router.use('/', require('./userRouter'));
router.use('/', require('./contextRouter'));

module.exports = router;
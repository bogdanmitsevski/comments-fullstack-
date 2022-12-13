const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const ContextController = require('../controllers/contextController');

router.use('/addContext', upload.single('file'), ContextController.addContext);

module.exports = router;
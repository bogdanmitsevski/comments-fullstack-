const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const ContextController = require('../controllers/contextController');

router.get('/comments', authMiddleware.checkData, ContextController.getComments);
router.post('/comments/:id', upload.single('file'), authMiddleware.checkData, ContextController.createComment);

module.exports = router;
const {Comment} = require('../models/models');
const path = require('path');
const authMiddleware = require('../middleware/authMiddleware');
class ContextController {

    async getComments (req, res) {
        try {
            const allComments = await Comment.findAll();
            res.json(allComments);
        }
        catch(e) {
            console.log(e);
        }
    }

    async createComment (req, res) {
        try {
            const data = authMiddleware.returnID(req);
            
            const newComment = await Comment.create({
                parent: req.body.parent,
                related: req.body.related,
                file: req.file ? req.file.path : '',
                text: req.body.text,
                userId: data.id
            })


            await newComment.save();
            res.status(201).json(newComment);
        }
        catch(e) {
            console.log(e);
        }
    }
};

module.exports = new ContextController;
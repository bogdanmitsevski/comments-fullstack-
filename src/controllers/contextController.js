const {Context} = require('../models/models');
const path = require('path');
class ContextController {
    async addContext(req, res) {
        try {
            const {userName, email, text} = req.body;
            //const {files} = req.body.file;
            //files.mv(path.resolve(__dirname, '..', 'uploads'));
            const newContext = await Context.create({
                userName: userName,
                email: email,
                file: req.file ? req.file.path : '',
                text: text
            })

            await newContext.save();
            res.status(201).json(newContext);
        }
        catch(e) {
            console.log(e);
        }
    }
};

module.exports = new ContextController;
const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },

    filename(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        cb(null, `${date}-${file.originalname}`);
    }
});

    const fileFilter = (req, file, cb) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === 'image/jpeg' || file.mimetype === 'text/txt') {
            cb(null, true);
        }
        else {
            cb(null, false);
        }
    };

    const sizeLimits = {
        fileFormat: 320*240
    }

    const weightLimits = {
        fileSize: 100
    }

module.exports = multer({
    storage,
    fileFilter,
    sizeLimits,
    weightLimits
})
const jwt = require('jsonwebtoken');
class authMiddleware {
    checkData (req, res, next) {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({message: "Authorization failed"});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({message: "Authorization failed"});
    }
};
    returnID (req) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return decoded;
        }
        catch(e) {
            console.log(e);
        }
    }


}

module.exports = new authMiddleware;


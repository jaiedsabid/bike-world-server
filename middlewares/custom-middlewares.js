const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
        res.status(401).send({ message: 'Unauthorized access' });
    } else {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    }
};

module.exports = verifyToken;

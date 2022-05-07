const express = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const user = req.query?.user;
    const bearerHeader = req.headers.authorization;

    if (!user) {
        next();
    } else {
        if (!bearerHeader) {
            return res.status(401).send({ message: 'Unauthorized access' });
        } else {
            const bearerToken = bearerHeader.split(' ')[1];
            const decodedToken = jwt.verify(
                bearerToken,
                process.env.JWT_SECREAT_KEY,
                (err, decoded) => {
                    if (err) {
                        return res
                            .status(403)
                            .send({ message: 'Forbidden access' });
                    }

                    return decoded;
                }
            );

            if (decodedToken.user !== user) {
                return res.status(403).send({ message: 'Forbidden access' });
            }

            return next();
        }
    }
};

module.exports = verifyToken;

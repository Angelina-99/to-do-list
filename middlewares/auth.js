const express = require('express');
const router = express.Router();

// router.post("/auth", async (req, res) => {
//     if (!req.body || !req.body.login || !req.body.password) {
//         return res.status(401).end();
//     }
//     const query = 'SELECT * FROM tasks;';
//     try {
//         const result = await req.db.query(query);
//         res.json(result.rows)
//     } catch (err) {
//         res.json({err: err})
//     }
// });

// module.exports = router;

const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).end();
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Bad token");
    }
    return next();
});

module.exports = router;
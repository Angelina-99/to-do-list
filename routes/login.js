const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", async (req, res) => {
    if (!req.body || !req.body.login || !req.body.password) {
        return res.status(403).send("Login and password is required");
    }

    const token = jwt.sign(
        {
            login: req.body.login,
            password: req.body.password
        },
        process.env.TOKEN_SECRET,
    );

    res.json({
        token: token,
    })
});

module.exports = router;

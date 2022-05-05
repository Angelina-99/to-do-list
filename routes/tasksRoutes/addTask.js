const express = require('express');
const router = express.Router();

router.post("/tasks", async (req, res) => {
    if (!req.body || !req.body.name) {
        return res.status(400).end();
    }
    const query = 'INSERT INTO tasks (name) VALUES ($1);';
    try {
        await req.db.query(query, [req.body.name]);
        res.json({
            message: "Task successfully added",
        });
    } catch (err){
        res.json({err: err})
    }
});

module.exports = router;

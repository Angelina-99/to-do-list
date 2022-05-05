const express = require('express');
const router = express.Router();

router.get("/tasks", async (req, res) => {
    const query = 'SELECT * FROM tasks;';
    try {
        const result = await req.db.query(query);
        res.json(result.rows)
    } catch (err) {
        res.json({err: err})
    }
});

module.exports = router;


const express = require('express');
const router = express.Router();

router.get("/tasks/:id", async (req, res) => {
    if (!req.params || !req.params.id) {
        return res.status(400).end();
    }

    const query = 'SELECT * FROM tasks WHERE id=$1;';
    try {
        const result = await req.db.query(query, [req.params.id]);
        if (result.rowCount === 0) {
            res.json({
                message: `Task ${req.params.id} not found`,
            });
        } else {
            res.json(result.rows[0]);
        }
    } catch (err){
        res.json({err: err})
    }
});

module.exports = router;
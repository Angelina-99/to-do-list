const express = require('express');
const router = express.Router();

router.put("/tasks/:id", async (req, res) => {
    if (!req.params || !req.params.id) {
        return res.status(400).end();
    }

    if (!req.body || !req.body.name) {
        return res.status(400).end();
    }

    const query = 'UPDATE tasks SET name = $1 WHERE id = $2;';
    
    try {
        const result = await req.db.query(query, [req.body.name, req.params.id]);
        if (result.rowCount === 0) {
            res.json({
                message: `Task ${req.params.id} was not updated`
            });
        } else {
            res.json({
                message: `Task ${req.params.id} successfully updated`,
                task: {
                    id: req.params.id,
                    name: req.body.name,
                },
            });
        }
    } catch (err){
        res.json({err: err})
    }
});

module.exports = router;
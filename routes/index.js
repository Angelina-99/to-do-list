const express = require("express");
const router = express.Router();

const login = require("./login");
const tasksRoutes = require("./tasksRoutes");

router.use(
    login,
    tasksRoutes,
);

module.exports = router;
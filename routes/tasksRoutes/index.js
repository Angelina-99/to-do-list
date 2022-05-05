const express = require("express");
const router = express.Router();

const auth = require("../../middlewares/auth");
const addTask = require("./addTask");
const deleteTask = require("./deleteTask");
const getTaskById = require("./getTaskById");
const getTasks = require("./getTasks");
const updateTask = require("./updateTask");

router.use(
    auth,
    addTask,
    deleteTask,
    getTaskById,
    getTasks,
    updateTask,
);

module.exports = router;
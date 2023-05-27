const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        // find all documents
        // await MyModel.find({});
        const task = await Task.find({});
        return res.status(200).json({ task });
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({ task });
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
};

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with Id: ${taskID}` });
        }
        return res.status(200).json({ task });
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });

        if (!task) {
            return res
                .status(404)
                .json({ msg: `No task with the Id: ${taskID}` });
        }

        return res.status(200).json({ task });

        // log to test in postman
        // res.status(200).json({ id: taskID, data: req.body });
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with Id: ${taskID}` });
        }
        return res.status(200);
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};

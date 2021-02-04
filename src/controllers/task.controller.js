const { Task } = require('../models');

exports.create =async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).send(task);
    } catch (err) {
        console.log(err);
    }
}

exports.edit = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        task.description = req.body.description;
        task.value = req.body.value;

        const taskSave = await task.save();
        res.status(200).send(taskSave);
    } catch (err) {
        console.log(err);
    }
}

exports.delete = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        await task.destroy();
        res.status(200).send(true);
    } catch (err) {
        console.log(err);
    }
}

exports.find = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).send(tasks);
    } catch (err) {
        console.log(err);
    }
}

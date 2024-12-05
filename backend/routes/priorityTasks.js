const express = require('express');
const router = express.Router();
const PriorityTask = require('../models/PriorityTask');

// Add tasks
router.post('/', async (req, res) => {
    const { date, tasks } = req.body;
    try {
        const newTask = new PriorityTask({ date, tasks });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'Failed to save tasks', error: err.message });
    }
});

// Fetch tasks by date
router.get('/:date', async (req, res) => {
    try {
        const tasks = await PriorityTask.find({ date: req.params.date });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch tasks', error: err.message });
    }
});

// Toggle completion
router.patch('/:id/complete', async (req, res) => {
    try {
        const task = await PriorityTask.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        // Toggle the completion status
        task.completed = !task.completed;
        await task.save();

        res.status(200).json(task); // Send the updated task back
    } catch (err) {
        res.status(500).json({ message: 'Failed to update completion status', error: err.message });
    }
});


module.exports = router;

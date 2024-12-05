const mongoose = require('mongoose');

const PriorityTaskSchema = new mongoose.Schema({
    date: { type: String, required: true },
    tasks: {
        big: { type: String, required: true },
        medium: { type: [String], required: true, maxlength: 3 },
        small: { type: [String], required: true, maxlength: 5 },
    },
    completed: { type: Boolean, default: false }, // New field
});

module.exports = mongoose.model('PriorityTask', PriorityTaskSchema);

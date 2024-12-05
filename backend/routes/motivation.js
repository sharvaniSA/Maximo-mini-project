const express = require('express');
const router = express.Router();

// Hardcoded motivational data
const motivationalData = [
    { task: 'Take a 10-minute walk', quote: 'The journey of a thousand miles begins with a single step.' },
    { task: 'Write down 3 things you are grateful for', quote: 'Gratitude turns what we have into enough.' },
    { task: 'Read 5 pages of a book', quote: 'A reader lives a thousand lives before he dies.' },
    { task: 'Drink a glass of water', quote: 'Water is the driving force of all nature.' },
    { task: 'Do 10 push-ups', quote: "Strength doesn’t come from what you can do, it comes from overcoming the things you once thought you couldn’t." },
];

// Route to get a random motivational task and quote
router.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * motivationalData.length);
    const randomMotivation = motivationalData[randomIndex];
    
    res.json(randomMotivation);
});

module.exports = router;

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Comment = require('./models/Comment');

const app = express();
const port = 3000;

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/commentsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/comments', async (req, res) => {
    const { name, email, comment } = req.body;
    const newComment = new Comment({ name, email, comment });

    try {
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

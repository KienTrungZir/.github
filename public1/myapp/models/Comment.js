const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);

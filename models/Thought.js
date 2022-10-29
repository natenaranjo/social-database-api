const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        throughText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [

        ]
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return `$(this.thoughts)`;
    });

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
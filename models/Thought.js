const { 
    Schema, 
    model,
    Types
} = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reactions');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
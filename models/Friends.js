const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

const friendsSchema = new Schema ({
    requestor: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
    },
    status: {
        type: Number,
        enums: [
            0, //Add Friend
            1, //Request Friendship
            2, //Pending Friendship
            3, //Friends
        ]
    }
}, {timestamps: true })

module.exports = friendsSchema;
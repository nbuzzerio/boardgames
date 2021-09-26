const mongoose = require('mongoose');
const Joi = require('joi');

const roomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    gameType: {
        type: String,
        required: true,
        enum: ['chatOnly', 'checkers', 'chess', 'connect4'],
        default: 'chatOnly'
    },
    players: {
        player1: {
            type: String,
            required: true,
            min: 1,
            max: 15
        },
        player2: {
            type: String,
            required: true,
            min: 1,
            max: 15
        }
    },
    chat: {
        type: [{
            user: {
                type: String,
                min: 1,
                max: 15,
            },
            message: {
                type: String,
                min: 1,
                max: 100,
            },
        }],
    }
})

const Room = db.model('Room', roomSchema);

function validateRoom(room) {
    const schema = Joi.object({
        roomName: Joi.string().min(3).max(20).required(),
        gameType: Joi.string().valid('chatOnly', 'checkers', 'chess', 'connect4'),
        players: Joi.object({
            player1: Joi.string().min(1).max(15).required(),
            player2: Joi.string().min(1).max(15).required(),
        }),
        chat: Joi.array().items(Joi.object({
            user: Joi.string().min(1).max(15).required(),
            message: Joi.string().min(1).max(100).required()

        }))
    })
    return schema.validate(store);
}

exports.Room = Room;
exports.roomSchema = roomSchema;
exports.validateRoom = validateRoom;

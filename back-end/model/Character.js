import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    subrace: {
        type: String,
        required: false,
    },
    background: {
        type: String,
        required: true,
    },
    alignment: {
        type: String,
        required: true,
    },
    languages: [{
        type: String,
        required: true,
    }],
    description: {
        type: String,
        required: true,
    },
    stats: [{
        type: Number,
        required: true,
    }],
    abilities: [{
        type: String,
        required: true,
    }],
}, { versionKey: false });

const Character = mongoose.model("Character", CharacterSchema);

export default Character;
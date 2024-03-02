import {Mongoose} from "mongoose";

const CharacterSchema = new Mongoose.Schema({
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
});

const Character = Mongoose.model("Character", CharacterSchema);

export default Character;
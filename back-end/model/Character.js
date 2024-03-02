import {Mongoose} from "mongoose";

const characterSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    }
});
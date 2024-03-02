import {Mongoose} from "mongoose";

const UserSchema = new Mongoose.Schema({
    id: {
        type: String,
        required: true
    }
})

const User = Mongoose.model("User", UserSchema)

export default User;
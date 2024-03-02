import dotenv from "dotenv"
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose"
import { ClerkExpressWithAuth, ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

import userRouter from "./routes/users.js"
import characterRouter from "./routes/characters.js"

dotenv.config()

//set up an express server
const app = express();
const port = process.env.PORT || 3000;
const db_access = process.env.MONGODB_ACCESS;

app.use(express.json());
app.use(express.static('dist'));
app.use(bodyParser.json());

app.use("/users", ClerkExpressWithAuth(), userRouter)
app.use("/characters", ClerkExpressRequireAuth(), characterRouter)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send('Unauthenticated!');
});

app.get('/test', async (req, res) => {
    res.send('Hello World');
    //req.body.class
    const cl = "wizard";
    let url = "";
    if (cl === "wizard"){
        url = "/classes/wizard/levels"
    }

    fetch( `https://www.dnd5eapi.co/api${url}`)
        .then(response => response.json())
        .then(data => console.log(data));
});

mongoose.connect(db_access).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
    process.exit(1)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

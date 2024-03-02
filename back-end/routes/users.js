import {Router} from "express";

const router = Router();

router.get("/", async (req, res) => {
    const {userId} = req.auth;
    if (userId) {
        res.status(200).send(`Hello ${userId}`);
    } else {
        res.send("Hello World");
    }
})

export default router;

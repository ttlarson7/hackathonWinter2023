import {Router} from "express"
import Character from "../model/Character.js"

const router = Router();

router.get("/", async (req, res) => {
    let {userId} = req.auth
    let characters = await Character.find({userId: userId}).exec()
    if (characters.length === 0) {
        return res.status(404).send({ERROR: "Cannot find characters"})
    } else {
        return res.status(200).json(characters)
    }
})

router.get("/:id", async (req, res) => {
    let {userId} = req.auth
    let {id} = req.params
    let character = await Character.findById(id).exec()
    if (!character || character.userId !== userId) {
        return res.status(404).send({ERROR: "Cannot find character"})
    } else {
        return res.status(200).json(character)
    }
})

router.put("/:id", async (req, res) => {
    let {userId} = req.auth
    let {id} = req.params
})

router.delete("/:id", async (req, res) => {
    let {userId} = req.auth
    let {id} = req.params
    Character.findByIdAndDelete(id, (err, doc) => {
        if (err || doc.userId !== userId) {
            return res.status(404).send({ERROR: "Cannot find character"})
        } else {
            return res.status(200).send({message: "Character deleted"})
        }
    })
})

router.post("/", async (req, res) => {
    let {userId} = req.auth
    try {
        // Create a new instance of your Mongoose model using the parsed request body
        const newCharacter = new Character(req.body);
        newCharacter.userId = userId;

        // Validate and save the data
        await newCharacter.save();

        // Send a response
        res.status(201).send(newCharacter);
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
    // await new Character({
    //     userId: userId,
    //     name: "Steve",
    //     class: "Wizard",
    //     race: "Human",
    //     background: "Noble",
    //     alignment: "Chaotic-Good",
    //     languages: ["Common", "Elvish"],
    //     description: "A wizard named Steve",
    //     stats: [10, 10, 10, 10, 10, 10],
    //     abilities: ["Fireball", "Magic Missile", "Invisibility"]
    // }).save()
    // res.status(201).send({message: "Character created"})
})

export default router

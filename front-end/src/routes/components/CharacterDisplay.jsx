import React from "react";
import { GlobalStateContext } from "../../App";

export default function CharacterDisplay({ id }) {
    const{characters} = React.useContext(GlobalStateContext)

    const selected = characters[id];
    const name = selected.name;
    const characterClass = selected.class;
    const race = selected.subrace;
    const subRace = selected.level;
    const level = selected.background;
    const background = selected.alignment;
    const language = selected.languages;
    const description = selected.description;
    const stats = selected.stats;
    const abilities = selected.abilities;
    
    const strength = stats[0];
    

    return (
        <div className="text-black">
            <p>Character ID: {id}</p>
            <h1>Name: {name}</h1>
            <p>Class: {characterClass}</p>
            <p>Race: {race}</p>
            <p>Sub Race: {subRace}</p>
            <p>description: {description}</p>
            <p>level: {level}</p>
            <p>background: {background}</p>
            <p>language: {language}</p>
            <p>stats: {stats}</p>
            <p>abiltiies: {abilities}</p>
            <p>strength: {strength}</p>

        </div>
    )
}
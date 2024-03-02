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
    const dexterity = stats[1];
    const consitution = stats[2];
    const intelligence = stats[3];
    const wisdom = stats[4];
    const charisma = stats[5];
    

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
            <p>abiltiies: {abilities}</p>

            <div className="flex justify-center">
            <div className="flex flex-row w-100 align-center stats shadow"> 
                <div className="stat place-items-center">
                <div className="stat-title">Dexterity</div>
                <div className="stat-value text-secondary">{dexterity}</div>
                </div>
           
                <div className="stat place-items-center">
                <div className="stat-title">Strength</div>
                <div className="stat-value text-secondary">{strength}</div>
                </div>
                        
                <div className="stat place-items-center">
                <div className="stat-title">Constitution</div>
                <div className="stat-value">{consitution}</div>
                </div>

                <div className="stat place-items-center">
                <div className="stat-title">Intelligence</div>
                <div className="stat-value text-secondary">{intelligence}</div>
                </div>

                <div className="stat place-items-center">
                <div className="stat-title">Wisdom</div>
                <div className="stat-value">{wisdom}</div>
                </div>

                <div className="stat place-items-center">
                <div className="stat-title">Charisma</div>
                <div className="stat-value">{charisma}</div>
                </div>
            </div>
            </div>

        </div>
    )
}
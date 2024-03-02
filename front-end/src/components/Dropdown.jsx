import React, { useState } from "react";
import { useGlobalState } from '../GlobalState';

export default function Dropdown() {
    const {globalRace, setGlobalRace, 
        globalClass, setGlobalClass,
        globalAlignment, setGlobalAlignment,
        globalBackground, setGlobalBackground
    } = useGlobalState();


    const backgrounds = ["Noble", "Outlander", "Acolyte", "Folk Hero"];
    const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Evil"];
    const classes = ["Warrior", "Sorcerer", "Rogue", "Cleric"];
    const races = ["Human", "Dwarf", "Gnome", "Elf", "Half-Elf", "Halfling", "Half-Orc", "Tiefling"];

    const handleSelectionChange = (e, setState) => {
        setState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        //testing
        console.log("Selected Race:", globalRace);
        console.log("Selected Class:", globalClass);
        console.log("Selected Alignment:", globalAlignment);
        console.log("Selected Background:", globalBackground);
    }

    return (
        <div id="category-dropdown" className="p-4 bg-white shadow-md rounded-md">
            <header className="text-center text-lg font-semibold text-gray-800 mb-4"> 
                Character Select
            </header>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <select 
                    className="p-2 border border-primary rounded-md shadow-sm focus:outline-none focus:border-blue-200"
                    id="races" 
                    onChange={(e) => handleSelectionChange(e, setGlobalRace)} 
                    value={globalRace}>
                    <option value="">Select a Race</option>
                    {races.map((race) => ( 
                        <option key={race} value={race}>
                            {race}
                        </option>
                    ))}
                </select>
                <select 
                    className="p-2 border border-primary rounded-md shadow-sm focus:outline-none focus:border-blue-200"
                    id="classes" 
                    onChange={(e) => handleSelectionChange(e, setGlobalClass)} 
                    value={globalClass}>
                    <option value="">Select a Class</option>
                    {classes.map((classType) => ( 
                        <option key={classType} value={classType}>
                            {classType}
                        </option>
                    ))}
                </select>
                <select 
                    className="p-2 border border-primary rounded-md shadow-sm focus:outline-none focus:border-blue-200"
                    id="alignments" 
                    onChange={(e) => handleSelectionChange(e, setGlobalAlignment)} 
                    value={globalAlignment}>
                    <option value="">Select an Alignment</option>
                    {alignments.map((alignment) => ( 
                        <option key={alignment} value={alignment}>
                            {alignment}
                        </option>
                    ))}
                </select>
                <select
                    className="p-2 border border-primary rounded-md shadow-sm focus:outline-none focus:border-blue-200"
                    id="backgrounds" 
                    onChange={(e) => handleSelectionChange(e, setGlobalBackground)} 
                    value={globalBackground}>
                    <option value="">Select a Background</option>
                    {backgrounds.map((background) => ( 
                        <option key={background} value={background}>
                            {background}
                        </option>
                    ))}
                </select>
                <button className="p-2 bg-quad text-white rounded-md hover:bg-tertiary hover:text-black" type="submit">Submit</button>
            </form>
        </div>
    );
}

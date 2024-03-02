import React, { useState } from "react";
import { GlobalStateContext } from "../../App";
import {SignInButton, SignedIn, SignedOut, UserButton, useAuth} from "@clerk/clerk-react"
export default function Dropdown() {
    const {globalRace, setGlobalRace, 
        globalClass, setGlobalClass,
        globalAlignment, setGlobalAlignment,
        globalBackground, setGlobalBackground,
        globalDescription, setGlobalDescription
    } = React.useContext(GlobalStateContext);
    const [characters, setCharacters] = React.useContext(GlobalStateContext);
    const [name, setName] = useState("ASD");
    const [cl, setCl] = useState("asd");
    const [race, setRace] = useState("asf");
    const [subRace, setSubRace] = useState("asdf");
    const [background, setBackground] = useState("asdf");
    const [alignment, setAlignment] = useState("adf");
    const [languages, setLanguages] = useState("asdf");
    const [description, setDescription] = useState("asdf");
    const [stats, setStats] = useState([1]);
    const [abilities, setAbilities] = useState(['as']);

    //user inputs: name, class, race, subrace, background, alignment, description, 
    //what we need to query: race, subrace, class, background, 
    
    const getRaceAbilities = async () => {
        const baseURL = 'https://www.dnd5eapi.co/api/races/'
        const response = await fetch(baseURL + globalRace.toLowerCase());
        const data = await response.json();

    }
    
    
    const backgrounds = ["Noble", "Outlander", "Acolyte", "Folk Hero"];
    const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Evil", "Neutral Evil", "Chaotic Evil", "Lawful Neutral", "True Neutral", "Chaotic Neutral"];
    const classes = ["Fighter", "Sorcerer", "Rogue", "Cleric", "Wizard", "Bard", "Druid", "Monk", "Barbarian", "Paladin", "Ranger"];
    const races = ["Human", "Dwarf", "Gnome", "Elf", "Half-Elf", "Halfling", "Half-Orc", "Tiefling", "Dragonborn"];

   


    const handleSelectionChange = (e, setState) => {
        setState(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setGlobalDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 

       
    }
    const { getToken } = useAuth();
    const createCharacter = async () => {
        const data = {
            
            userId: "",
            name: name,
            class: cl,
            race: race,
            subRace: subRace,
            background: background,
            alignment: alignment,
            languages: languages,
            description: description,
            stats: stats,
            abilities: abilities
        }
        setCharacters([...characters, data]);
        const response = await fetch('/api/characters', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${await getToken()}`
            },
            body: JSON.stringify(data)
          })
    }

    return (
        <div id="category-dropdown" className="p-4 bg-white shadow-md rounded-md ml-10">

            <header className="text-center text-lg font-semibold text-gray-800 mb-4"> 
                Character Create
            </header>

            <input type="text" placeholder="Character Name" className="input input-bordered input-primary w-full max-w-xs mb-5" />
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
                <input 
                    type="text" 
                    placeholder="Enter a Description" 
                    className="input input-bordered w-full max-w-xs" 
                    value={globalDescription}
                    onChange={handleDescriptionChange}
                />                
                <button className="p-2 bg-quad text-white rounded-md hover:bg-tertiary hover:text-black" type="submit" onClick={createCharacter}>Submit</button>
            </form>
        </div>
    );
}

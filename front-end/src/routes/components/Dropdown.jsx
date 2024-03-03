import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "../../App";
import {SignInButton, SignedIn, SignedOut, UserButton, useAuth} from "@clerk/clerk-react"
export default function Dropdown() {
    const { globalRace, setGlobalRace,
        globalClass, setGlobalClass,
        globalAlignment, setGlobalAlignment,
        globalBackground, setGlobalBackground,
        globalName, setGlobalName,
        globalLanguages, setGlobalLanguages,
        globalAbilities, setGlobalAbilities,
        globalStats, setGlobalStats,
        globalDescription, setGlobalDescription, characters, setCharacters } = React.useContext(GlobalStateContext);
    
   
  


    //user inputs: name, class, race, subrace, background, alignment, description, 
    //what we need to query: race, subrace, class, background, 
    
    const backgrounds = ["Noble", "Outlander", "Acolyte", "Folk Hero"];
    const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Evil", "Neutral Evil", "Chaotic Evil", "Lawful Neutral", "True Neutral", "Chaotic Neutral"];
    const classes = ["Fighter", "Sorcerer", "Rogue", "Cleric", "Wizard", "Bard", "Druid", "Monk", "Barbarian", "Paladin", "Ranger"];
    const races = ["Human", "Dwarf", "Gnome", "Elf", "Half-Elf", "Halfling", "Half-Orc", "Tiefling", "Dragonborn"];

    const getRaceAbilities = async (e, setState, setRace, setAbilities) => {
        setState(e.target.value);
        const baseURL = 'https://www.dnd5eapi.co/api/races';
        const globalRace = e.target.value;
       
        const baseURL2 = 'https://www.dnd5eapi.co';
    
        try {
            // Fetching race data
            const raceResponse = await fetch(`${baseURL}/${globalRace.toLowerCase()}`);
            const raceData = await raceResponse.json()
                .then(async (raceData) => {
                    
                    const traitNames = [];
                    const traitDescriptions = [];
                    const traitsArr = raceData['traits'];
                    const traitPromises = traitsArr.map(async (trait) => {
                        const traitResponse = await fetch(`${baseURL2}${trait['url']}`)
                        const traitData = await traitResponse.json()
                            .then(traitData => {
                                traitNames.push(traitData['name']);
                                traitDescriptions.push(traitData['desc']);
                                return traitData;
                            });
                    });
                    
            
                    setGlobalLanguages(raceData['language_desc']);
                    
                    setGlobalAbilities((prevAbilities) => {
                        const newAbilities = [...prevAbilities]
                        newAbilities[0] =
                                {
                                    speed: raceData['speed'],
                                    age: raceData['age'],
                                    size: raceData['size'],
                                    sizeDescription: raceData['size_description'],
                                    traits: traitNames,
                                    traitsDescription: traitDescriptions,
                        }
                        
                        return newAbilities;
                    });
            })
           
        } catch (error) {
            console.error('Error fetching race abilities:', error);
            
        }
    };

    const getClassAbilities = async (e, setState) => {
        setState(e.target.value);
        const baseURL = 'https://www.dnd5eapi.co/api/classes/';
        
        try {
            // Fetching race data
            const raceResponse = await fetch(`${baseURL}/${globalClass.toLowerCase()}`);
            const raceData = await raceResponse.json()
                .then(async (raceData) => {
                    
                    
            })
           
        } catch (error) {
            console.error('Error fetching race abilities:', error);
            
        }
    };

        const handleSelectionChange = (e, setState) => {
            setState(e.target.value);
            console.log(e.target.value)
        }

        const handleDescriptionChange = (e) => {
            setGlobalDescription(e.target.value);
        }


        const handleSubmit = (e) => {
            e.preventDefault();
        }
        
    const { getToken } = useAuth();
    const createCharacter = async () => {
            console.log(globalName, globalClass, globalRace, globalBackground, globalAlignment, globalLanguages, globalDescription, globalStats, globalAbilities)
            const data = {
                userId: "",
                name: globalName,
                class: globalClass,
                race: globalRace,
                subRace: "high-elf",
                background: globalBackground,
                alignment: globalAlignment,
                languages: globalLanguages,
                description: globalDescription,
                stats: globalStats,
                abilities: globalAbilities
            }
            
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
                <input type="text" placeholder="Character Name" className="input input-bordered input-primary w-full max-w-xs mb-5" onChange={(e) => handleSelectionChange(e, setGlobalName)} />
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <select
                        className="p-2 border border-primary rounded-md shadow-sm focus:outline-none focus:border-blue-200"
                        id="races"
                        onChange={(e) => getRaceAbilities(e, setGlobalRace)}
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

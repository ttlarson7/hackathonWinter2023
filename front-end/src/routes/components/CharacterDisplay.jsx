import React, {useEffect, useState} from "react";
import {useAuth} from "@clerk/clerk-react";

export default function CharacterDisplay({ id }) {
    const { getToken } = useAuth();

    const [characterData, setCharacterData] = useState(null);
    useEffect(() => {
        const getCharacter = async () => {
            try {
                const response = await fetch('/api/characters/' + id, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        Authorization: `Bearer ${await getToken()}`
                    }
                });
                const data = await response.json();
                setCharacterData(data);
            } catch (error) {
                console.error('Error fetching character:', error);
            }
        };

        getCharacter();
    }, [id, getToken])

    if (!characterData) {
        return <div>Loading...</div>
    }

    const { name, characterClass, race, subrace, background, alignment, languages, description, stats, abilities } = characterData;
    const [ strength, dexterity, constitution, intelligence, wisdom, charisma ] = stats;

    return (
        <div className="text-black">
            {/*<p>Character ID: {id}</p>*/}
            <h1>Name: {name}</h1>
            <p>Class: {characterClass}</p>
            <p>Race: {race}</p>
            <p>Sub Race: {subrace}</p>
            <p>description: {description}</p>
            <p>alignment: {alignment}</p>
            <p>background: {background}</p>
            <p>language: {languages}</p>
            <p>abilities: {abilities}</p>

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
                <div className="stat-value text-secondary">{constitution}</div>
                </div>

                <div className="stat place-items-center">
                <div className="stat-title">Intelligence</div>
                <div className="stat-value text-primary">{intelligence}</div>
                </div>

                <div className="stat place-items-center">
                <div className="stat-title">Wisdom</div>
                <div className="stat-value text-primary">{wisdom}</div>
                </div>

                <div className="stat place-items-center">
                <div className="stat-title">Charisma</div>
                <div className="stat-value text-primary">{charisma}</div>
                </div>
            </div>
            </div>

        </div>
    )
}
import React, {useEffect, useState} from "react";
import {useAuth} from "@clerk/clerk-react";
import DragonBornImage from "../../assets/dragonborn.png";
import ElfImage from "../../assets/elf.png";
import GoblinImage from "../../assets/goblin.png";
import HumanImage from "../../assets/human.png";
import OrcImage from "../../assets/halforc.png";
import HalfElfImage from "../../assets/halfelf.png";
import HalflingImage from "../../assets/halfling.png";
import TieflingImage from "../../assets/tiefling.png";
import DwarfImage from "../../assets/dwarf.png";
import GnomeImage from "../../assets/gnome.png";
import Default from "../../assets/default.jpg";

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

    const { name, class: characterClass, race, subrace, background, alignment, languages, description, stats, abilities } = characterData;
    const [ strength, dexterity, constitution, intelligence, wisdom, charisma ] = stats;

    const getUrl = () => {
        let imageUrl;

        switch (race) {
            case "DragonBorn":
                imageUrl = DragonBornImage;
                break
            case "Elf":
                imageUrl = ElfImage;
                break;
            case "Goblin":
                imageUrl = GoblinImage;
                break;
            case "Human":
                imageUrl = HumanImage;
                break;
            case "Orc":
                imageUrl = OrcImage;
                break;
            case "Half-Elf":
                imageUrl = HalfElfImage;
                break;
            case "Halfling":
                imageUrl = HalflingImage;
                break;
            case "Tiefling":
                imageUrl = TieflingImage;
                break;
            case "Dwarf":
                imageUrl = DwarfImage;
                break;
            case "Gnome":
                imageUrl = GnomeImage;
                break;
            default:
                imageUrl = Default;
        }

        return imageUrl;
    }
    const url = getUrl();

    return (
        <div className="text-white">
            {/*<p>Character ID: {id}</p>*/}
            <div className="flex justify-center pt-2 h-20">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">{name}</h1>
            </div>

            <figure className="h-80 flex justify-center items-center p">
                <img src={`${url}`} className="object-contain max-h-full" alt="Shoes"/>
            </figure>

            <p>Class: {characterClass}</p>
            <p>Race: {race}</p>
            <p>Sub Race: {subrace}</p>
            <p>description: {description}</p>
            <p>alignment: {alignment}</p>
            <p>background: {background}</p>
            <p>language: {languages}</p>
            {/*<p>abilities: {abilities}</p>*/}

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
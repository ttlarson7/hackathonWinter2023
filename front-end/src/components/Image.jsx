import React, { useState } from "react";
import GoblinImage from "../assets/goblin.png"
import DwarfImage from "../assets/dwarf.png"
import { useGlobalState } from "../GlobalState";

export default function Image() {
    const {globalRace} = useGlobalState();
    
    const getImageSource = () => {
        switch (globalRace) {
            case "Goblin":
                return GoblinImage;
            case "Dwarf":
                return DwarfImage;d
            default:
                return ""; 
        }
    };

    return (
        <div className="flex items-center justify-center">
            <img className="w-1/4 h-auto" src={getImageSource()} alt={globalRace} />
            <p>{globalRace}</p>
        </div>
    );
}

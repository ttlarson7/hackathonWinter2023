import React, { useState } from "react";
import DwarfImage from "../../assets/dwarf.png"
import GoblinImage from "../../assets/goblin.png"
import HumanImage from "../../assets/human.png"
import GnomeImage from "../../assets/gnome.png"
import ElfImage from "../../assets/elf.png"
import HalfElfImage from "../../assets/halfelf.png"
import HalforcImage from "../../assets/halforc.png"
import TieflingImage from "../../assets/tiefling.png"
import HalflingImage from "../../assets/halfing.png"

import { useGlobalState } from "../../GlobalState";

export default function Image() {
    const {globalRace} = useGlobalState();
    
    const getImageSource = () => {
        switch (globalRace) {
            case "Goblin":
                return GoblinImage;
            case "Dwarf":
                return DwarfImage;
            case "Human":
                return HumanImage;
            case "Gnome":
                return GnomeImage;
            case "Elf":
                return ElfImage;
            case "Half Elf":
                return HalfElfImage;
            case "Half Orc":
                return HalforcImage;
            case "Halfling":
                return HalflingImage;
            case "Tiefling":
                return TieflingImage;
            default:
                return ""; 
        }
    };

    return (
        <div className="flex items-center justify-center">
            <img className="w-1/2 h-1/2" src={getImageSource()} alt={globalRace} />
        </div>
    );
}

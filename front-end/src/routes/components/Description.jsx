import React from "react";
import DwarfImage from "../../assets/dwarf.png";
import GoblinImage from "../../assets/goblin.png";
import HumanImage from "../../assets/human.png";
import GnomeImage from "../../assets/gnome.png";
import ElfImage from "../../assets/elf.png";
import HalfElfImage from "../../assets/halfelf.png";
import HalforcImage from "../../assets/halforc.png";
import TieflingImage from "../../assets/tiefling.png";
import HalflingImage from "../../assets/halfing.png";
import DefaultImage from "../../assets/default.jpg";
import { GlobalStateContext } from "../../App";

export default function Description() {
  const { globalRace, globalClass, globalDescription } = React.useContext(GlobalStateContext);

  const getImageSource = () => {
    switch (globalRace) {
      case "":
        return DefaultImage;
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
        return DefaultImage;
    }
  };

  return (
    <div className="card flex w-96 shadow-xl">
      <div className="bg-white max-w-xl rounded-lg overflow-hidden shadow-lg">
        <div className="flex justify-center">
          <img
            className="w-1/2"
            src={getImageSource()}
            alt={globalRace}
          />
        </div>
        <div className="text-black p-6">
          <div className="uppercase tracking-wide text-sm font-semibold">
            Class: {globalClass}
          </div>
          <div className="uppercase tracking-wide text-sm font-semibold mt-4">
            Race: {globalRace}
          </div>
          <div className="uppercase tracking-wide text-sm font-semibold mt-4">
            Description: 
          </div>
          <p className="text-lg">
            {globalDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

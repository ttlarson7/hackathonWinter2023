import React from "react";
import DwarfImage from "../../assets/dwarf.png";
import GoblinImage from "../../assets/goblin.png";
import HumanImage from "../../assets/human.png";
import GnomeImage from "../../assets/gnome.png";
import ElfImage from "../../assets/elf.png";
import HalfElfImage from "../../assets/halfelf.png";
import HalforcImage from "../../assets/halforc.png";
import TieflingImage from "../../assets/tiefling.png";
import HalflingImage from "../../assets/halfling.png";
import DefaultImage from "../../assets/default.jpg";
import { GlobalStateContext } from "../../App";
import { useEffect } from "react";
export default function Description() {
  const { globalRace, globalClass, globalDescription, globalBackground, globalAbilities, globalTraits, setGlobalTraits } = React.useContext(GlobalStateContext);
  // speed: raceData['speed'],
  //                                   age: raceData['age'],
  //                                   size: raceData['size'],
  //                                   sizeDescription: raceData['size_description'],
  //                                   traits: traitNames,
  //                                   traitsDescription: traitDescriptions,
  useEffect(() => {
    setGlobalTraits(globalAbilities[0]?.['traits'])
  }, [globalAbilities[0]?.['traits']])
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
  // newAbilities[1] =
  //                               {
  //                                   hitDie: classData['hit_die'],
  //                                   proficiencies: proficiencies,
  //                           savingThrows: savingThrows,
  //                           levelDescriptions: levelDescriptions,
  //                           startingEquipment: startingEquipment
  //                       }
// speed: raceData['speed'],
  //                                   age: raceData['age'],
  //                                   size: raceData['size'],
  //                                   sizeDescription: raceData['size_description'],
  //                                   traits: traitNames,
  //                                   traitsDescription: traitDescriptions,
  const test = () => {
    console.log(globalAbilities[0]?.['traits'])
  }
  return (
    <div className="card flex w-4/5 shadow-xl">
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-lg">
        <div className="flex justify-center">
          <img
            className="w-1/3"
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
            Background: {globalBackground}
          </div>
          <div className="uppercase tracking-wide text-sm font-semibold mt-4">
            Description:
          </div>
          <p className="text-lg">
            {globalDescription}
          </p>
          <div className="flex justify-around">
            <div className="flex flex-col max-w-1/2"> {/* Added max-w-1/2 class */}
              <div className="uppercase tracking-wide text-sm font-semibold mt-4 self-center">
                Race Abilities
              </div>
              <p className="text-lg max-w-80">
                <b>Age:</b> {globalAbilities[0]?.['age']}
              </p>
              <p className="text-lg">
                <b>Speed:</b> {globalAbilities[0]?.['speed']}
              </p>
              <p className="text-lg max-w-80">
                <b>Size:</b> {globalAbilities[0]?.['sizeDescription']}
              </p>
              <p>{globalAbilities[0]?.['traits']}</p>
            </div>
            <div className="flex flex-col items-center max-w-1/2"> {/* Added max-w-1/2 class */}
              <div className="uppercase tracking-wide text-sm font-semibold mt-4">
                Class Abilities
              </div>
              <p className="text-lg max-w-80">
                <b>Hit Dice</b> {globalAbilities[1]?.['hitDie']}
              </p>
              {globalAbilities[1]?.['proficiencies'].map((proficiency, index) => {
                return <p key={index} className="text-lg"><b>Proficient In: </b>{proficiency}</p>
              })}
              {globalAbilities[1]?.['startingEquipment'].map((equipment, index) => {
               return <p key={index} className="text-lg"><b>Starting Equipment: </b>{equipment}</p>
              })}
            </div>
          </div>
        </div>
      </div>
      <button onClick={test}>button</button>
    </div>
  );
}
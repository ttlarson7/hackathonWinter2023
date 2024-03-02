import React from "react";
import { Link } from "react-router-dom";
import ElfImage from "../../assets/elf.png";
import GoblinImage from "../../assets/goblin.png";
import HumanImage from "../../assets/human.png";
import OrcImage from "../../assets/halforc.png";
import HalfElfImage from "../../assets/halfelf.png";
import HalflingImage from "../../assets/halfling.png";
import DragonBornImage from "../../assets/dragonborn.png"
// import TieflingImage from "../../assets/tiefling.png";
// import DwarfImage from "../../assets/dwarf.png";
// import GnomeImage from "../../assets/gnome.png";
import Default from "../../assets/default.jpg";


export default function CharacterCode({ character, index}) {
    const [url, setUrl] = React.useState('');
    React.useEffect(() => {
        let imageUrl = Default;
    
        switch (character.race) {
          case "DragonBorn":
            imageUrl = DragonBornImage;
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
    
        setUrl(imageUrl);
      }, [character.race]);

    const testURL = () => {
        console.log(character.url)
  }
  
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
        <figure className="max-h-60 flex justify-center items-center"><img src={`${url}`} className="object-contain max-h-full" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{ character.name }</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <button onClick={testURL}>Test</button>
          <div className="card-actions justify-end">
              <Link to={`/character/${index}`} className="btn btn-primary">Use</Link>
            </div>
        </div>
        </div>

    )
}
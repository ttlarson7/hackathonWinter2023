import React from "react";
import Navbar from "./components/Navbar";
import { GlobalStateContext } from "../App";
import CharacterCard from "./components/CharacterCard";
import { useEffect } from "react";
export default function Home() {
    const { characters, setCharacters } = React.useContext(GlobalStateContext);
    const [hasCharacters, setHasCharacters] = React.useState(characters.length > 0);
    const test = () => {
        console.log(characters)
    }
    useEffect(() => {
        if (characters.length > 0) {
          setHasCharacters(true);
        }
      }, [characters]);
    return (
        <div className="min-h-screen bg">
            <Navbar page={2} />
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="text-7xl mt-20 mb-20 font-black animate-slow">Your Party</h1>
                    
                </div>
                {hasCharacters ? (
                    <div className=" m-10 flex flex-wrap">
                        {characters.map((character, index) => (
                            <CharacterCard key={index} character={character} c={character.class} />
                        ))}
                    </div>
                    ) : (
                    <div>You should create some characters</div>
                )}
            </div> 
            
            
            

            
        </div>
    );
    }
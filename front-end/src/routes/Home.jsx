import React from "react";
import Navbar from "./components/Navbar";
import { CharacterContext } from "../App";
export default function Home() {
    const { characters, setCharacters } = React.useContext(CharacterContext);
    
    return (
        <div className="min-h-screen bg-tertiary">
            <Navbar page={2} />
            <div className="flex flex-col items-center">
                <div>
                <h1 className="text-7xl mt-20 font-black animate-slow">Your Party</h1>
                </div>
            </div>
            <div className="grid-cols-3">

            </div>
        </div>
    );
    }
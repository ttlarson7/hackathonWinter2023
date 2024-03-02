import React from "react";
import { useParams } from "react-router-dom";
import CharacterDisplay from "./components/CharacterDisplay";
import Navbar from "./components/Navbar";
import { GlobalStateContext } from "../App";

export default function CharacterPage() {
    const { id } = useParams();

    const characterId = parseInt(id);

    return (
        <div className="min-h-screen bg-secondary">
            <Navbar page={3}/>
            <CharacterDisplay id={characterId}/> 
        </div>
    );
}

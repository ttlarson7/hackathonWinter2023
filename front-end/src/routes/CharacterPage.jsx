import React from "react";
import { useParams } from "react-router-dom";
import CharacterDisplay from "./components/CharacterDisplay";
import Navbar from "./components/Navbar";

export default function CharacterPage() {
    const { id } = useParams();
    
    return (
        <div className="min-h-screen bg">
            <Navbar page={3}/>
            <CharacterDisplay id={id} />
            {/*<button onClick={testURL}>Test URL</button>*/}
        </div>
    );
}

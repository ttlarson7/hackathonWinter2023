import React from "react";
import { useParams } from "react-router-dom";
import CharacterDisplay from "./components/CharacterDisplay";
import Navbar from "./components/Navbar";
import { GlobalStateContext } from "../App";
import {SignInButton, SignedIn, SignedOut, UserButton, useAuth} from "@clerk/clerk-react"
export default function CharacterPage() {
    const { id } = useParams();

    // const characterId = parseInt(id);
    const [characters, setCharacters] = React.useContext(GlobalStateContext);
    // const { getToken } = useAuth();
    // const testURL = async () => {
    //     const response = await fetch('/api/characters', {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             Authorization: `Bearer ${await getToken()}`
    //         },
            
    //       })
    // }
    
    return (
        <div className="min-h-screen bg-secondary">
            <Navbar page={3}/>
            <CharacterDisplay id={characterId} /> 
            <button onClick={testURL}>Test URL</button>
        </div>
    );
}

import React from "react";
import Dropdown from "./components/Dropdown";
import Description from "./components/Description";
import Navbar from "./components/Navbar";

export default function CharacterSelect() {

    return (
        <div>
            <Navbar page={3}/>
            <div className="bg-secondary min-h-screen flex flex-row items-center " id="main">
                <div className="flex-1 flex" id='dropdown'>
                    <Dropdown/>
                </div>
                <div className="flex-1 flex align-center">
                    <Description/>
                </div>
            </div>
        </div>
    );
}
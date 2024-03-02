import React from "react";
import Dropdown from "./components/Dropdown";
import Description from "./components/Description";

export default function CharacterSelect() {
    return (
        <div className="bg-secondary min-h-screen flex" id="main">
            <div className="flex-1" id='dropdown'>
                <Dropdown/>
            </div>
            <div className="flex-1 flex justify-end">
                <Description/>
            </div>
        </div>
    );
}
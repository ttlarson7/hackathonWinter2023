import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Image from "./components/Description";
import Description from "./components/Description";

export default function CharacterSelect() {
    
    return (
        <div className="bg-secondary min-h-screen flex items-center" id="main">
            <div className="justify-left" id='dropdown'>
                <Dropdown/>
            </div>
            <div className="justify-right">
                <Description/>
            </div>
        </div>
    );
}

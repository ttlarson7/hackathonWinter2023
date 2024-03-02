import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Image from "./components/Image";

export default function CharacterSelect() {
    
    return (
        <div className="bg-secondary min-h-screen flex items-center" id="main">
            <div className="justify-left" id='dropdown'>
                <Dropdown/>
            </div>
            <div className="pl-100">
                <Image/>
            </div>
        </div>
    );
}

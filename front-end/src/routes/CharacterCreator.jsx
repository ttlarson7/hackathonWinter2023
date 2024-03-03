import React from "react";
import Dropdown from "./components/Dropdown";
import Description from "./components/Description";
import Navbar from "./components/Navbar";

export default function CharacterSelect() {

    return (
        <div>
            <Navbar page={3}/>
            <div className="bg min-h-screen flex items-start" id="main">
                <div className="flex" style={{ maxHeight: 'max-content' }} id='dropdown'>
                    <Dropdown/>
                </div>
                <div className="flex-1 flex justify-center items-center"> {/* Updated this line */}
                <Description/>
            </div>
            </div>
        </div>
    );
}
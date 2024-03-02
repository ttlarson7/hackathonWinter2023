import React from "react";
import { Link } from "react-router-dom";
export default function CharacterCode({ character, index}) {

    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-4">
        <figure><img src={`${character.url}`}alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{ character.name }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <Link to={`/character/${index}`} className="btn btn-primary">Use</Link>
            </div>
        </div>
        </div>

    )
}
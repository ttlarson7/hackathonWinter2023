import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { GlobalStateContext } from '../../App';
export default function Navbar({ page }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [gotCharacters, setGotCharacters] = useState(false);
    const { characters, setCharacters } = React.useContext(GlobalStateContext);

    const getCharacters = async () => {
        if (gotCharacters) {
            console.log(characters)
            return;
        } 
        const response = await fetch('/api/characters', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
        const data = await response.json();
        setCharacters(data);
        setGotCharacters(true);
    
    }

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const navbarClasses = `navbar ${isScrolled ? 'bg-opacity-50' : 'bg-opacity-100'} bg-base-100 sticky top-0 z-50 `;

    if (page === 1) {
        return (
            <div className={navbarClasses}>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Realm Roster</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <SignedOut>
                            <li>
                                <Link to="/login" className="btn btn-ghost rounded-lg">Sign In</Link>
                            </li>
                        </SignedOut>
                        <SignedIn>
                            <li>
                                <Link to="/home" className="btn btn-ghost rounded-lg" onClick={getCharacters}>Home</Link>
                            </li>
                        </SignedIn>
                        <SignedIn>
                            <li>
                                <UserButton />
                            </li>
                        </SignedIn>
                    </ul>
                </div>
                </div>
        )
    }

    if (page === 2) {
        return (
            <div className={navbarClasses}>
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">Realm Roster</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <SignedIn>
                            <li>
                                <Link to="/characterCreator" className="btn btn-ghost rounded-lg">Create Character</Link>
                            </li>
                        </SignedIn>
                        <SignedIn>
                            <li>
                                <UserButton />
                            </li>
                        </SignedIn>
                    </ul>
                </div>
                </div>
        )
    }
}
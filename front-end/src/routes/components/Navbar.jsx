import React from 'react';
import { useState, useEffect } from 'react';

export default function Navbar({ page }) {
    const [isScrolled, setIsScrolled] = useState(false);

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


    const navbarClasses = `navbar ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'} bg-base-100 sticky top-0 z-50 bg-primary`;

    if (page === 1) {
        return (
            <div className={navbarClasses}>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                        <summary>
                            Parent
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                </div>
        )
    }
}
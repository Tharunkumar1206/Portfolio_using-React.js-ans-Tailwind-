import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header className="flex justify-between p-3 bg-primary">
            <a href="#" className="font-bold text-lg text-black">Tharun Portfolio</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#project">Project</a></li>
                    <li><a href="/#resume">Resume</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden">
                <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="h-6 w-6 text-white" /></button>
        </header>
    );
}

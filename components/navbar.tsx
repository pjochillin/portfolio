"use client"

import Link from "next/link"
import { useState } from "react"
import ScrollLink from "./scroll-link"

export default function navbar() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    return (
        <nav className="top-0 w-full">
            <button type="button" onClick={toggleMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-off_white rounded-lg md:hidden hover:bg-theme_green focus:outline-none focus:ring-2 focus:off_white dark:hover:bg-theme_green dark:focus:theme_green" aria-controls="navbar-default" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            
            <div className={`w-full md:block md:w-auto items-center ${openMobileMenu ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                <ul className="flex flex-col md:flex-row md:justify-end md:space-x items-center space-y-4 md:space-y-0 md:space-x-16">
                    <li>
                        <ScrollLink targetId="about" className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink targetId="" className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">Skills</ScrollLink>
                    </li>
                    <li>
                        <Link href="Resume.pdf">
                            <h2 className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">Resume</h2>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
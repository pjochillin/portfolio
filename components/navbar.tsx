import Link from "next/link"
import ScrollLink from "./scroll-link"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useWindowSize } from 'react-use'

export default function navbar({ toggleMobileMenu, openMobileMenu } : {toggleMobileMenu: () => void, openMobileMenu: boolean}) {
    
    const { width } = useWindowSize();

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (document.getElementById("navbar-list")) {
            if (openMobileMenu || width > 767) {
                document.getElementById("navbar-list")!.style.display = "block";
            } else {
                setTimeout(() => document.getElementById("navbar-list")!.style.display = "none", 80);
            }
        }
    }, [openMobileMenu, width]);
    
    return (
        <nav className="top-0 w-full">
            <button type="button" onClick={toggleMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-off_white rounded-lg md:hidden hover:bg-theme_green focus:outline-none focus:ring-2 focus:off_white dark:hover:bg-theme_green dark:focus:theme_green" aria-controls="navbar-default" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            
            <div id="navbar-list" className={`hidden w-full md:w-auto items-center on-all duration-300 ease-in-out`}>
                <ul className="flex flex-col md:flex-row md:justify-end md:space-x items-center space-y-4 md:space-y-0 md:space-x-16">
                    <li className="hidden md:block">
                        <ScrollLink targetId="about" className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">About</ScrollLink>
                    </li>
                    <li className="hidden md:block">
                        <ScrollLink targetId="works" className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">Works</ScrollLink>
                    </li>
                    <li className="hidden md:block">
                        <Link href="Resume.pdf">
                            <h2 className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">Resume</h2>
                        </Link>
                    </li>
                    <motion.li
                        initial="closed"
                        animate={openMobileMenu ? "open" : "closed"}
                        variants={variants}
                        className="block md:hidden"
                    >
                        <ScrollLink targetId="about" className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">About</ScrollLink>
                    </motion.li>
                    <motion.li
                        initial="closed"
                        animate={openMobileMenu ? "open" : "closed"}
                        variants={variants}
                        className="block md:hidden"
                    >
                        <ScrollLink targetId="works" className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">Works</ScrollLink>
                    </motion.li>
                    <motion.li
                        initial="closed"
                        animate={openMobileMenu ? "open" : "closed"}
                        variants={variants}
                        className="block md:hidden"
                    >
                        <Link href="Resume.pdf">
                            <h2 className="text-4xl text-off_white transition duration-300 ease-in-out hover:text-theme_green">Resume</h2>
                        </Link>
                    </motion.li>
                </ul>
            </div>
        </nav>
    )
}
import Image from 'next/image'
import ProfileImage from './profile-image'
import Link from "next/link"
import NavBar from './navbar'
import { useState, useEffect } from "react"
import { useWindowSize } from 'react-use'

export default function profile() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
  
    const toggleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    
    const { width } = useWindowSize();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => {
                if (width > 767 && openMobileMenu) {
                    toggleMobileMenu();
                }
            }
             
            window.addEventListener("resize", handleResize);
    
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [width]);

    return (
        <div className="relative ml-[8%] mr-[8%] mt-8 md:mt-32">
            <div className="absolute top-0 -left-4 w-4/6 h-4/6 bg-theme_green rounded-full mix-blend-multiply filter blur-xl opacity-[5%] animate-blob overflow-hidden"></div>
            <div className="absolute top-0 -right-4 w-4/6 h-4/6 bg-theme_green rounded-full mix-blend-multiply filter blur-xl opacity-[5%] animate-blob overflow-hidden"></div>
            <div className="absolute -bottom-12 left-20 w-4/6 h-4/6 bg-theme_green rounded-full mix-blend-multiply filter blur-xl opacity-[5%] animate-blob overflow-hidden"></div>
            <div className="absolute -bottom-12 right-20 w-4/6 h-4/6 bg-theme_green rounded-full mix-blend-multiply filter blur-xl opacity-[5%] animate-blob overflow-hidden"></div>
            <div className="z-10 relative">
                <NavBar toggleMobileMenu={toggleMobileMenu} openMobileMenu={openMobileMenu}/>
                <Image 
                    src="/images/code-icon.png"
                    height={144}
                    width={144}
                    alt=""
                />
                <h1 className="z-10 text-off_white text-7xl md:text-8xl leading-none">Joshua <br></br>Ochalek</h1>
                <div className="w-12 md:w-16 mt-8 ml-1 bg-theme_green h-3"></div>
                <div className="relative mt-32">
                    <Link href="https://github.com/pjochillin" className="inline-block">
                        <Image
                            src="/images/github-icon.png"
                            height={48}
                            width={48}
                            alt=""
                        />
                    </Link>
                    <Link href="https://linkedin.com/in/joshua-ochalek/" className="inline-block relative ml-4">
                        <Image
                            src="/images/linkedin-icon.png"
                            height={48}
                            width={48}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
            <div className={`z-0 z-0 absolute ${openMobileMenu ? "top-56" : "top-16"} min:[767px]:top-0 min-[900px]:left-1/2 translate-x-[9%] min-[900px]:-translate-x-1/2`}>
                <ProfileImage />
            </div>
        </div>
    )
}
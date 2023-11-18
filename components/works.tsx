"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function works() {

    const [openCelloMenu, setOpenCelloMenu] = useState(false);

    const toggleOpenCelloMenu = () => {
        setOpenCelloMenu(!openCelloMenu);
    };
    return (
        <div id="works-div" className="mx-[8%] min-[750px]:mx-0 mb-32 relative flex flex-col min-[750px]:flex-row justify-center min-[750px]:space-x-16">
            <div className="min-[750px]:basis-5/12">
                <h1 id="works" className="font-medium tracking-[0.3rem] text-theme_gray">— Works</h1>
                <h1 className="pt-7 text-2xl min-[1000px]:text-4xl text-secondary_white">Activities</h1>
                <p className="text-theme_gray text-md min-[1000px]:text-lg mt-10 min-[1000px]:mt-24 min-[1100px]:mt-16 min-[1300px]:mt-10 leading-loose">
                    Here are some current highlights to look at! Click on a panel to learn more.
                </p>
            </div>
            <div className="min-[750px]:basis-5/12 flex flex-col min-[750px]:flex-row justify-center">
                <div className="mt-16 min-[750px]:mt-0 min-[750px]:basis-7/12">
                    <div className={`${openCelloMenu ? "grayscale-0" : "grayscale"} hover:grayscale-0 transition duration-500 ease-in-out`} onClick={toggleOpenCelloMenu}>
                        <Image
                            src="/images/cello-thumbnail.png"
                            height={1150}
                            width={998}
                            alt=""
                        />
                    </div>
                    <div className={`${openCelloMenu ? "block" : "hidden"}`}>
                        <ul>
                            <li className="text-off_white font-medium p-2 text-center border-theme_gray">
                                Selected Works
                            </li>
                            <li className="text-theme_gray p-2 text-center bg-dropdown_bg border-theme_gray border-2">
                                <Link href="https://youtu.be/NZ7Zypkejeos" className="hover:underline">L. van Beethoven - Cello Sonata No. 2, Op. 5 No. 2, II. Rondo. Allegro</Link>
                            </li>
                            <li className="text-theme_gray p-2 text-center bg-dropdown_bg border-theme_gray border-x-2 border-b-2">
                                <Link href="https://youtu.be/-Sux4OGaQek" className="hover:underline">J. S. Bach - Cello Suite No. 2 in D minor, BWV 1008, I. Prelude</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
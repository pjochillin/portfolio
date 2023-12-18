"use client"

import Image from "next/image"
import Link from "next/link"

export default function works({ openRotcModal, openCelloModal } : { openRotcModal: () => void, openCelloModal: () => void }) {
    return (
        <div id="works-div" className="mx-[8%] min-[750px]:mx-0 mb-32 relative flex flex-col min-[750px]:flex-row justify-between">
            <div className="min-[750px]:basis-4/12 min-[750px]:ml-[8%] flex flex-col space-y-24">
                <div>
                    <h1 id="works" className="font-medium tracking-[0.3rem] text-theme_gray">— Works</h1>
                    <h1 className="pt-7 text-2xl min-[1000px]:text-4xl text-secondary_white">Activities</h1>
                    <p className="text-theme_gray text-md min-[1000px]:text-lg mt-10 min-[1000px]:mt-24 min-[1100px]:mt-16 min-[1300px]:mt-10 min-[750px]:mr-[20%] leading-loose">
                        Here are some current highlights to look at! Click on a panel to learn more.
                    </p>    
                </div>
                <div className="mt-16 min-[750px]:mt-0 min-[750px]:mr-[20%]">
                    <div className={`grayscale hover:grayscale-0 hover:cursor-pointer transition duration-500 ease-in-out`} onClick={openRotcModal}>
                        <Image
                            src="/images/rotc-thumbnail.png"
                            height={1150}
                            width={998}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="min-[750px]:basis-4/12 min-[750px]:mr-[8%] flex flex-col content-start">
                <div className="mt-16 min-[750px]:mt-0 min-[750px]:ml-[20%]">
                    <div className={`grayscale hover:grayscale-0 hover:cursor-pointer transition duration-500 ease-in-out`} onClick={openCelloModal}>
                        <Image
                            src="/images/cello-thumbnail.png"
                            height={1150}
                            width={998}
                            alt=""
                        />
                    </div>
                    <div className={`hidden`}>
                        <ul>
                            <li className="text-off_white font-medium p-2 text-center border-theme_gray">
                                Selected Works
                            </li>
                            <li className="text-theme_gray p-2 text-center bg-dropdown_bg border-theme_gray border-2">
                                <Link href="https://youtu.be/NZ7Zypkejeos" className="transition duration-300 ease-in-out hover:text-theme_green">L. van Beethoven - Cello Sonata No. 2, Op. 5 No. 2, II. Rondo. Allegro</Link>
                            </li>
                            <li className="text-theme_gray p-2 text-center bg-dropdown_bg border-theme_gray border-x-2 border-b-2">
                                <Link href="https://youtu.be/-Sux4OGaQek" className="transition duration-300 ease-in-out hover:text-theme_green">J. S. Bach - Cello Suite No. 2 in D minor, BWV 1008, I. Prelude</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
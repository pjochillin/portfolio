"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface SkillBoxProps {
    text: string;
}

type WidthDimension = {
    width: number | undefined;
}

export default function skillBox({ text }: SkillBoxProps) {

    const skillPairs: Record<string, string> = {
        "Software Developer": "code-off_white-icon",
        "Concert Cellist": "cello-icon",
        "Coding Instructor": "teacher-icon"
    }

    const datesPairs: Record<string, string> = {
        "Software Developer": "~ August 2019",
        "Concert Cellist": "~ February 2018",
        "Coding Instructor": "~ May 2021"
    }

    function getWidth() {
        const [windowDimensions, setWindowDimensions] = useState<WidthDimension>({
            width: undefined
        });

        useEffect(() => {
            function handleResize(): void {
                setWindowDimensions({
                    width: window.innerWidth
                });
            }
            handleResize();
            window.addEventListener('resize', handleResize);
            return (): void => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions.width;
    }

    function getImageSize() {
        const width = getWidth();
        if (width) {
            if (width >= 2450) {
                return 45;
            } else if (width >= 1900) {
                return 40;
            } else if (width >= 1600) {
                return 30;
            } else if (width >= 1400) {
                return 25;
            } else if (width >= 1100) {
                return 20;
            } else if (width < 750) {
                if (width >= 650) {
                    return 30;
                } else if (width >= 500) {
                    return 25;
                } else if (width >= 450) {
                    return 20;
                } else {
                    return 15;
                }
            } else {
                return 15;
            }
        }
        return 15
    }

    return (
        <div className={`h-1/4 aspect-square basis-1/6 flex flex-col-reverse 
        ${text == "Software Developer" ? "bg-theme_green" : "bg-theme_lightgray"}`}>
            <div className="basis-1/2 flex flex-row items-start">  
                <div className="basis-5/12 flex justify-center mt-3"> 
                    <Image
                        src={`/images/${skillPairs[text]}.png`}
                        width={getImageSize()}
                        height={getImageSize()}
                        alt=""
                    />
                </div>
                <div className="basis-2/3 mt-2">
                    <div className="text-sm min-[400px]:text-lg min-[450px]:text-xl min-[500px]:text-2xl min-[650px]:text-3xl min-[750px]:text-xs min-[900px]:text-sm min-[1150px]:text-lg min-[1100px]:text-xl min-[1400px]:text-2xl min-[1600px]:text-3xl min-[1900px]:text-4xl min-[2450px]:text-5xl text-off_white whitespace-pre"> 
                        { text.split(" ")[0] } { "\n" }
                        { text.split(" ")[1] + "."}
                    </div>
                    <div className="mt-1.5 text-[0.6rem] text-off_white"> { datesPairs[text] } </div>
                </div>
            </div>
        </div>
    )
}
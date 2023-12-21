"use client"

import Link from "next/link"
import SkillBox from "./skill-box"
import { useRef, useEffect } from "react"
import { useWindowSize } from "react-use"

export default function description() {
    const skillBoxContainerRef = useRef<HTMLDivElement | null>(null);
    const { width } = useWindowSize();
  
    const updateMargin = () => {
        const containerRef = skillBoxContainerRef.current;
      
        if (containerRef) {
            const totalHeight = containerRef.offsetHeight;
            const marginBottomValue = totalHeight / 2; 
      
            if (width >= 750) {
                containerRef.style.top = `${marginBottomValue}px`;
                containerRef.style.marginTop = `${marginBottomValue}px`;
                containerRef.style.paddingBottom = "0";
                document.getElementById("works-div")!.style.paddingTop = `${marginBottomValue * 1.5}px`;
            } else {
                containerRef.style.top = "0px";
                containerRef.style.marginTop = "6rem";
                containerRef.style.paddingBottom = "4rem";
                document.getElementById("works-div")!.style.paddingTop = "10rem";
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            updateMargin()
        }
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return (
        <div className="z-10 mt-32 min-[400px]:mt-40 bg-dark_bg min-w-screen min-h-[880px]">
            <div className="relative flex flex-col min-[750px]:flex-row">
                <div className="pt-40 ml-[8%] mr-[8%] min-[750px]:mr-[4%] basis-3/12">
                    <h1 id="about" className="font-medium tracking-[0.3rem] text-theme_gray">— About</h1>
                    <h1 className="pt-7 text-2xl min-[1000px]:text-4xl text-secondary_white">About</h1>
                    <p className="text-theme_gray text-md min-[1000px]:text-lg mt-10 min-[1000px]:mt-24 min-[1100px]:mt-16 min-[1300px]:mt-10 leading-loose">
                        My name is Joshua Ochalek. I am a first-year student at Cornell University studying Computer Science, Music, and Italian.
                        I aspire to be both an innovator and mentor, someone who motivates others while creating the technology of the future. 
                    </p>
                </div>
                <div className="hidden min-[750px]:block basis-1/12"></div>
                <div className="pt-10 ml-[8%] mr-[8%] min-[750px]:pt-40 min-[750px]:mr-[8%] min-[750px]:ml-[4%] basis-5/12 flex flex-col space-y-10">
                    <h1 className="relative text-2xl min-[1000px]:text-4xl text-secondary_white leading-tight">"I trust that everything happens for a reason, even if we are not wise enough to see it." — Oprah Winfrey</h1>
                    <div className="text-theme_gray text-md min-[1000px]:text-lg leading-loose min-[750px]:absolute min-[750px]:bottom-0 min-[750px]:w-[41.6666%]">
                        After receiving a Bachelor's degree from Cornell, I plan on entering industry as a software developer or in the niche subfield of cybersecurity. Having previous
                        experience with quantum computing, I envision integrating that along with knowledge learned at Cornell to revolutionize the next era of technology.
                    </div>
                </div>
            </div>
            <div className="ml-[8%] mt-10 min-[750px]:mt-24 space-x-10 min-[750px]:mb-[-50px] min-[1200px]:mb-[-100px] min-[1600px]:mb-[-150px] min-[2000px]:mb-[-200px]">
                <Link href="mailto:jo447@cornell.edu" className="inline text-3xl text-theme_green underline underline-offset-[6px]">
                    jo447@cornell.edu
                </Link>
                <Link href="mailto:jo447@cornell.edu" className="hidden min-[360px]:inline text-3xl text-theme_green underline underline-offset-[6px]">
                    →
                </Link>
            </div>
            {/* min-[750px]:top-24 mt-24 */}
            <div ref={skillBoxContainerRef} className={`relative mx-[30%] min-[750px]:mx-0 flex flex-col min-[750px]:flex-row place-self-center justify-center space-y-6 min-[750px]:space-y-0 min-[750px]:space-x-6`}>
                <SkillBox text="Software Developer" /> 
                <SkillBox text="Coding Instructor" /> 
                <SkillBox text="Concert Cellist" /> 
            </div>
        </div>
    )
}
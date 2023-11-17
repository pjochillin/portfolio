import Link from "next/link"
import SkillBox from "./skill-box"

export default function description() {
    return (
        <div className="z-10 mt-40 bg-dark_bg min-w-screen">
            <div className="relative flex flex-col min-[750px]:flex-row">
                <div className="pt-40 ml-[8%] mr-[8%] min-[750px]:mr-[4%] basis-3/12">
                    <h1 id="about" className="font-medium tracking-[0.3rem] text-theme_gray">— About</h1>
                    <h1 className="pt-7 text-2xl min-[1000px]:text-4xl text-secondary_white">About</h1>
                    <p className="text-theme_gray text-md min-[1000px]:text-lg mt-10 min-[1000px]:mt-24 min-[1100px]:mt-16 min-[1300px]:mt-10 leading-loose">
                        My name is Joshua Ochalek. I am a first-year student at Cornell University studying Computer Science and Italian.
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
            <div className="ml-[8%] mt-10 min-[750px]:mt-24 space-x-10">
                <Link href="mailto:jo447@cornell.edu" className="inline text-3xl text-theme_green underline underline-offset-[6px]">
                    jo447@cornell.edu
                </Link>
                <Link href="mailto:jo447@cornell.edu" className="text-3xl text-theme_green underline underline-offset-[6px]">
                    →
                </Link>
            </div>
            <div className="relative pb-6 min-[750px]:pb-0 min-[750px]:top-24 mt-24 mx-[30%] min-[750px]:mx-0 flex flex-col min-[750px]:flex-row justify-center space-y-6 min-[750px]:space-y-0 min-[750px]:space-x-6">
                <SkillBox text="Software Developer" /> 
                <SkillBox text="Coding Instructor" /> 
                <SkillBox text="Concert Cellist" /> 
            </div>
        </div>
    )
}
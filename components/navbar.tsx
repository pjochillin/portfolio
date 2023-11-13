import Link from "next/link"

export default function navbar() {
    return (
        <div className="absolute top-0 w-full flex flex-row-reverse justfy-around">
            <Link className = "" href="Resume.pdf">
                <h2 className="text-4xl text-off_white inline-block transition duration-300 ease-in-out hover:text-theme_green">Resume</h2>
            </Link>
            <h2 className="text-4xl text-off_white inline-block mr-16 transition duration-300 ease-in-out hover:text-theme_green">Skills</h2>
            <h2 className="text-4xl text-off_white inline-block mr-16 transition duration-300 ease-in-out hover:text-theme_green">About</h2>
        </div>
    )
}
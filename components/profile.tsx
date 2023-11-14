import Image from 'next/image'
import ProfileImage from './profile-image'
import Link from "next/link"
import NavBar from './navbar'

export default function profile() {
    return (
        <div className="relative ml-[8%] mr-[8%] mt-8 md:mt-32">
            <div className="z-10 relative">
                <NavBar />
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
            <div className="z-0 hidden md:block z-0 absolute top-0 left-1/2 -translate-x-1/2">
                <ProfileImage />
            </div>
        </div>
    )
}
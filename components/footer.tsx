import Link from "next/link"
import Image from "next/image"

export default function footer() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-11/12 my-8 ml-1 bg-theme_gray h-0.5 rounded-full opacity-20"></div>
            </div>
            <div className="mb-8 flex justify-between">
                <h3 className="text-theme_gray ml-[8%]">© Joshua Ochalek 2023</h3>
                <div className="mr-[8%]">
                    
                    <Link href="https://github.com/pjochillin" className="inline-block">
                        <Image
                            src="/images/github-icon-gray.png"
                            height={24}
                            width={24}
                            alt=""
                        />
                    </Link>
                    <Link href="https://linkedin.com/in/joshua-ochalek/" className="inline-block relative ml-4">
                        <Image
                            src="/images/linkedin-icon-gray.png"
                            height={24}
                            width={24}
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
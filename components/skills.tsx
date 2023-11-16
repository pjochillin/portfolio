import Image from "next/image"

interface SkillProps {
    name: String
}

export default function skill({ name }: SkillProps) {
    return (
        <li className="border-dotted rounded-2xl border-theme_green border-2">
            <Image 
                className="p-4"
                src={"/images/" + name + "-icon.png"}
                width={96}
                height={96}
                alt=""
            />
            <h1 className="text-off_white text-lg text-center pb-4 capitalize">{name}</h1>
        </li>
    )
        
}

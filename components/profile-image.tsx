import Image from "next/image"

export default function profilePicture() {
    return (
        <div>
            <Image
                src = "/images/standing-edited.png"
                width = {1152 / 1.5}
                height = {2454 / 1.5}
                alt = ""
            />
        </div>
    )
}
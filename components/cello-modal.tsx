import { useState, useEffect, useRef, useCallback } from "react"
import { useWindowSize } from "react-use"

export default function celloModal({ closeCelloModal } : {closeCelloModal: () => void}) {
    const images: string[] = ["/images/cello-1.png", "/images/cello-2.png"];
    const links: string[] = ["https://youtu.be/NZ7Zypkejeos", "https://youtu.be/-Sux4OGaQek"]

    const bottomRef = useRef<HTMLDivElement>(null);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };   
    
    const { height } = useWindowSize();

    const escModal = useCallback((event: any) => {
        if (event.key === "Escape") {
            closeCelloModal();
        }
    }, []);

    useEffect(() => {
        if (bottomRef) {
            bottomRef.current?.scrollIntoView();
        }
        if (typeof window !== "undefined") {
            const handleResize = () => {}
             
            window.addEventListener("resize", handleResize);
            document.addEventListener("keydown", escModal, false);
    
            return () => {
                window.removeEventListener("resize", handleResize);
                document.removeEventListener("keydown", escModal, false);
            };
        }
    }, [height, currentImageIndex, escModal]);

    return (
        <div id="activity-modal" className="z-50 fixed top-0 left-0 min-w-full min-h-full flex flex-col items-center justify-center bg-black-rgba overflow-y-auto">
            <div id="modalBody" className={`absolute opacity-100 w-10/12 min-[750px]:w-6/12 bg-theme_gray rounded-xl`}>
                <div id="modalTop" className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 id="modalHeader" className="text-xl font-semibold text-secondary_white">
                        Cello
                    </h3>
                    <button type="button" onClick={closeCelloModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
                <div id="modalBottom" className="relative flex flex-col justify-center rounded-b-xl">
                    <div className="py-10 px-10 text-sm min-[750px]:text-base">
                        As a college cellist who has studied for several years, I have played all kinds of repertoire, from Lalo to Haydn. Click on the
                        images below to view various recordings from over the years.
                    </div>

                    <div className="relative self-center h-1/4 w-5/6 min-[900px]:w-1/2 mb-10">
                        <a href={links[currentImageIndex]} target="_blank">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                                className="w-full hover:cursor-pointer"
                            />
                        </a>
                        <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-secondary_white bg-theme_gray rounded text-sm min-[750px]:text-base px-1">
                            Previous
                        </button>
                        <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-secondary_white bg-theme_gray rounded text-sm min-[750px]:text-base px-1">
                            Next
                        </button>
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    )
}
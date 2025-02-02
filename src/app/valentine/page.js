"use client"
import { cn } from "@/lib/utils";
import { inter } from "../layout";
import { useState } from "react";
import html2canvas from 'html2canvas';
import { ShareIcon } from "lucide-react";
import localFont from 'next/font/local'

const PerfectlyNinetiesRegular = localFont({
    src: '../../../public/fonts/PerfectlyNineties-Regular.otf',
    display: 'swap',
  })

const EditorialNewRegular = localFont({
    src: '../../../public/fonts/EditorialNew-Regular.otf', 
    display: 'swap',
  })


export default function Valentine() {
    const [noIndex, setNoIndex] = useState(0);
    const no_text = ["No", "Are you sure?", "Really Sure?", "Think again", "Last chance!", "Pretty please?", "I'll be sad...", "Don't do this!", "Change of heart?", "Final answer?", "No"];
    const [screen, setScreen] = useState(0); // 0: question, 1: yes, 2: no
    const [b1, setB1] = useState("order-1");
    const [b2, setB2] = useState("order-2");
    const [yesSelected, setYesSelected] = useState(false);
    const handleNoClick = () => {
        setNoIndex((noIndex + 1) % no_text.length);
        if (noIndex === no_text.length - 2) {
            setB1("order-2");
            setB2("order-1");
        }
        if (noIndex === no_text.length - 1) {
            setScreen(2);
            setYesSelected(false);
            reset();
        }

    };

    const handleYesClick = () => {
        setScreen(1);
        setYesSelected(true);
        reset();
    };

    const handleQuestionClick = () => {
        setScreen(0);
        setYesSelected(false);
        reset();
    };

    const reset = () => {
        setNoIndex(0);
        setB1("order-1");
        setB2("order-2");
    };

    const shareAsImage = async () => {
        try {
            const shareData = {
                title: 'Valentine\'s Day',
                text: 'Happy Valentine\'s Day!',
                files: [
                    new File(
                        [await fetch(yesSelected ? '/val_yes.png' : '/val_no.png').then(r => r.blob())],
                        'valentine.png',
                        { type: 'image/png' }
                    )
                ]
            };
            
            if (navigator.canShare && navigator.canShare(shareData)) {
                await navigator.share(shareData);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    return (
        <div className="w-screen h-[100svh] flex items-center justify-center bg-[#acacac]">
            <div className="fixed bottom-[10%] ">
                <a href="https://github.com/nishaaanth2/clean/tree/main/src/app/valentine" target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center w-40 h-10 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all">
                    <div className="flex items-center justify-center gap-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-white">View Source</span>
                    </div>
                </a>
            </div>
            <div id="valentine-card" className={cn("h-[560px] w-full  min-[857px]:w-auto min-[857px]:aspect-[13/9] m-auto  relative p-7 bg-[#f4f3ef] shadow-2xl ",
                EditorialNewRegular.className)}>
                <div className=" border-2 border-[#c9302b] h-full p-1">
                    <div className="border-2 border-[#c9302b] h-full">

                        <div className={cn("flex flex-col items-center justify-center gap-4 h-full", screen === 0 ? "" : "hidden")}>
                            <img src="/glass.png" alt="Valentine" className="w-[4.5rem] h-[4.5rem] object-contain animate-tilt duration-[1ms] " />
                            {/* <img src="/valentine_text.png" alt="Valentine" className=" h-28 object-contain" /> */}
                            {/* valentine_text.png */}
                            <h1 className={cn("text-[3.2rem] leading-[3.2rem] text-[#c9302b] text-center", PerfectlyNinetiesRegular.className)}>Will you be my<br /> Valentine?</h1>

                            <div className="flex flex-col gap-4  mt-10">
                                <button
                                    className={cn(" bg-[#c9302b] text-white w-32 mx-auto px-8 pb-1 pt-[8px] rounded-[50%] transition-transform uppercase ", 
                                        b1,
                                        EditorialNewRegular.className)}
                                    onClick={handleYesClick}
                                >
                                    YES
                                </button>
                                <button
                                    onClick={handleNoClick}
                                    className={cn("border border-[#c9302b] text-[#c9302b] w-auto px-8 pb-1 pt-[8px] rounded-[50%] capitalize ",
                                        b2
                                    )}
                                >
                                    {no_text[noIndex]}
                                </button>
                            </div>




                        </div>
                        <div className={cn("flex flex-col items-center justify-center gap-4 h-full", screen === 1 ? "" : "hidden")}>
                            <img
                                src="/valentine.gif"
                                alt="Valentine"
                                className="h-44 object-contain"

                            />
                            <h2 className={cn("text-[3.2rem] leading-[3.2rem] text-[#c9302b] text-center", PerfectlyNinetiesRegular.className)}>Yaaay! </h2>

                            <button className="bg-[#c9302b] text-white w-36 mx-auto px-8 h-9 pt-1 mt-10 rounded-[50%]  transition-transform uppercase active:scale-95 flex items-center justify-center gap-2"

                                onClick={shareAsImage}
                            >
                                <span className="leading-none">Share</span>
                                <ShareIcon className="w-4 h-4 mb-1" />
                            </button>
                            <p className={cn("mt-5 text-xs uppercase text-black border-b-2 border-[#c9302b] tracking-widest font-medium text-center cursor-pointer flex", inter.className)}
                                onClick={handleQuestionClick}
                            >
                                {/* I'd love to say yes again */}
                                Go back
                            </p>


                        </div>

                        <div className={cn("flex flex-col items-center justify-center gap-4 h-full", screen === 2 ? "" : "hidden")}>
                            <img
                                src="/valetine_sad.gif"
                                alt="Valentine"
                                className="h-44 object-contain"

                            />
                            <h2 className={cn("text-[3.2rem] leading-[3.2rem] text-[#c9302b] text-center", PerfectlyNinetiesRegular.className)}>Oh.. Okay {":("} </h2>

                            <button className="bg-[#c9302b] text-white w-36 mx-auto px-8 h-9 pt-1 mt-10 rounded-[50%]  transition-transform uppercase active:scale-95 flex items-center justify-center gap-2"

                                onClick={shareAsImage}
                            >
                                <span className="leading-none">Share</span>
                                <ShareIcon className="w-4 h-4 mb-1" />
                            </button>
                            <p className={cn("mt-5 text-xs uppercase text-black border-b-2 border-[#c9302b] tracking-widest font-medium text-center cursor-pointer flex", inter.className)}
                                onClick={handleQuestionClick}
                            >
                                {/* I'd love to say yes again */}
                                {"You can still say yes !"}
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
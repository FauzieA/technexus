import { useEffect, useState } from "react";

export const Loadingscreen = ({onComplete}) => {

    const [text, setText] = useState("");
    const fullText = "TECHNEXUS";

    useEffect(() => {
    let index = 0;
    const interval = setInterval (() => {
        setText(fullText.substring(0, index));
        index++;

        if (index > fullText.length) {
            clearInterval(interval);

            setTimeout(() => {
                onComplete();
            }, 1000)
        }
    }, 100);

    return () => clearInterval(interval);
}, [onComplete]);


 return( <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"> 
    <div className="mb-4 text-4xl font-orbitron font-bold"> {text} <span className="animate-blink ml-1 "> | </span> </div>

    <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#D6F80D] shadow-[0_0_15px_#d1aa57] animate-loading-bar">
            
         </div>

    </div>
    </div>
);
};
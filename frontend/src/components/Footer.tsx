import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { FaCookieBite } from "react-icons/fa";

const Footer = () => {
    return (
        <TooltipProvider>
            <footer className="w-full bg-[#f1e7e0] border-t border-[#e0d2c3] px-6 sm:px-10 py-4 flex flex-wrap justify-between items-center text-sm text-gray-700 font-medium tracking-wide shadow-inner">

                {/* Left side: Signature */}
                <p className="text-sm sm:text-base">
                    <span className="text-[#C97E4D] font-semibold">Alae</span> is the best.
                </p>

                {/* Right side: Cookie */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a
                            href="https://github.com/Alae-J/Toki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-[#C97E4D] hover:text-[#9C5F2C] transition-colors"
                        >
                            <FaCookieBite className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                            <span className="inline-block">Click me for a cookie</span>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent
                        side="top"
                        sideOffset={6}
                        className="bg-white border border-gray-300 shadow-md rounded px-3 py-1 text-gray-700 text-xs font-medium transform -translate-x-20"
                    >
                        <p>Alae is indeed the best, bro...</p>
                    </TooltipContent>
                </Tooltip>
            </footer>
        </TooltipProvider>
    );
};

export default Footer;

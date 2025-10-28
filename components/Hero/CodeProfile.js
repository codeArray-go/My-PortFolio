import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetbrain = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

const CoderInfo = {
    name: "Akhil Singh Bhandari",
    role: "MERN stack developer",
    location: "Faridabad",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
    ],
};

const CodeProfile = () => {
    return (
        <div
            className={`max-w-3xl sm:mx-auto my-8 border border-gray-800 bg-slate-950 rounded-md shadow-2xl shadow-slate-900 overflow-hidden text-[13px] sm:text-[15px] transition-transform duration-300 hover:scale-[1.02] ${jetbrain.className}`}
        >
            {/* Card Header */}
            <div className="w-full h-12 sm:h-14 border-b border-slate-900 flex items-center justify-between px-4 sm:px-8 bg-gray-900/60">
                <div className="flex gap-2 sm:gap-3 items-center">
                    <span
                        className="bg-red-700 rounded-full h-3 w-3 sm:h-4 sm:w-4"
                        aria-hidden="true"
                    />
                    <span
                        className="bg-yellow-500 rounded-full h-3 w-3 sm:h-4 sm:w-4"
                        aria-hidden="true"
                    />
                    <span
                        className="bg-green-700 rounded-full h-3 w-3 sm:h-4 sm:w-4"
                        aria-hidden="true"
                    />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm" role="text">
                    Coder.js
                </span>
            </div>

            {/* Card Main */}
            <div className="w-full h-full py-6 sm:py-10 ps-10 sm:px-12 leading-relaxed break-words">
                <ul className="list-decimal space-y-1">
                    <li>
                        <span className="text-blue-300">const </span>
                        <span className="text-white">Coder</span>
                        <span className="text-blue-300"> = &#123;</span>
                    </li>

                    {Object.entries(CoderInfo).map(([key, value]) => (
                        <li key={key} className="pl-6 sm:pl-10">
                            <span className="text-blue-400">{key}: </span>

                            {key === "skills" ? (
                                <span className="text-green-300">
                                    [
                                    {value.map((skill, i) => (
                                        <span key={i} className="text-yellow-300">
                                            &ldquo;{skill}&rdquo;
                                            {i !== value.length - 1 && (
                                                <span className="text-white">, </span>
                                            )}
                                        </span>
                                    ))}
                                    ],
                                </span>
                            ) : (
                                <span className="text-green-300">&ldquo;{value}&ldquo;,</span>
                            )}
                        </li>
                    ))}

                    <li>
                        <span className="text-blue-300">&#125;</span>;
                        {/* Blinking cursor */}
                        <span className="ml-1 inline-block w-[1px] h-5 bg-white animate-blink"></span>
                    </li>
                </ul>
            </div>

            {/* Card Footer */}
            <div className="w-full h-8 sm:h-9 border-t border-gray-900 flex items-center justify-between text-[10px] sm:text-xs text-gray-500 px-3 sm:px-4 bg-gray-900/60">
                <p>UTF-8</p>
                <p>&#123; &#125; JavaScript</p>
                <p>Ln 6, Col 30</p>
            </div>
        </div>
    );
};

export default CodeProfile;

import React from "react";

const About = () => {
return (
    <div data-scroll-section data-scroll data-scroll-speed='-.1' className="w-full relative py-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black px-10">
        <h1 className="text-[4vw] font-[400] tracking-tighter leading-15">
            We craft category-defining presentations, brand identities, and digital
            experiences that drive funding, sales, and market leadership.
        </h1>

        <hr className="mt-10 w-full" />
        <div className="flex items-center justify-between relative mt-5">
            <p className="mb-70">What you can expect:</p>

            <div className="w-[50%] wrapper flex items-center justify-between">

            <p className="w-[50%] text-[1.2vw] font-[400] leading-7">
                We don't just make slides. We shape strategy, storytelling, design
                scalable brand systems, and build presentations that make people say:
                "I want in!"
                <br /> <br />
                Our clients make the world go round - from deep tech, aerospace and
                robotics to music festivals and Michelin-starred restaurants.
                <br /> <br />
                Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber,
                Lexus, Salience Labs, Trawa and AllThingsGo.
            </p>

            <div className="mt-20 mr-10 flex flex-col space-y-2">
                <a className="group relative inline-block underline" href="#">
                    Instagram
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                
                <a className="group relative inline-block underline" href="#">
                    Beance
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
                <a className="group relative inline-block underline" href="#">
                    LinkedIn
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
                <a className="group relative inline-block underline" href="#">
                    Dribbble
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
                <a className="group relative inline-block underline" href="#">
                    Facebook
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
            </div>

            </div>
        </div>
 <hr className="mt-10 w-full" />
        <div className="flex items-center justify-between text-black w-full mt-10">
            <div>
                <h1 className="text-6xl font-mrdium">How can we help:</h1>

                {/* container for button + circle */}
                <div className="mt-4 flex items-center gap-6">
                    <button className="bg-black flex gap-5 items-center text-white p-5 text-3xl rounded-[4vw]">Read More
                         {/* white circle that reveals a tilted top-right arrow on hover */}
                    <div className="group relative w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-200">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-black transform transition-all duration-300 scale-0 opacity-0 group-hover:scale-200 group-hover:opacity-100 group-hover:-rotate-45"
                            aria-hidden="true"
                        >
                            {/* right arrow (will be tilted to top-right on hover using -rotate-45) */}
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    </button>

                   
                </div>

            </div>
            
            <div className="w-[40%] h-[300px]  rounded-3xl">

                <img className="object-cover w-full h-full rounded-3xl hover:scale-95 transition-transform duration-300" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />

            </div>
        </div>
    </div>
);
};

export default About;

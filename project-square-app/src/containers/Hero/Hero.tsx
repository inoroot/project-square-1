import { FC } from "react";

const Hero: FC = () => {
    return (
        <div className="text-shades-200 flex bg-[url('/src/assets/images/hero-image.png')] bg-auto md:bg-contain lg:bg-cover h-screen">
            <div className="flex flex-col">
                <div className="p-12 text-white mt-60 px-20">
                    <h1 className="font-bold text-[1.5] md:text-[2rem] lg:text-[3rem] text-shades-100">Live with Confidence</h1>
                    <p className="text-xl mt-4 md:w-52 lg:w-96">José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                        <button className="mt-1 text-white rounded-6xl cursor-pointer bg-primary-main overflow-hidden flex flex-row items-center border-0 rounded-2xl justify-center py-[0.63rem] px-[1.25rem] gap-[0.5rem]">
                            View project
                        </button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Hero;

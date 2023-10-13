import { FC } from "react";

interface ServiceItemProps {
    title: string
    description: string
    iconPath: string
}

const ServiceItem: FC<ServiceItemProps> = ({title, description, iconPath}) => {
    return (
        <div className="justify-self-center self-center">
            <div className="flex flex-col gap-10">
                <div>
                    <img
                        className="w-[4rem] h-[4rem] overflow-hidden"
                        alt=""
                        src={iconPath}
                    />
                </div>
                <div>
                    <b className="leading-[120%] inline-block">
                        {title}
                    </b>
                </div>
                <div className="text-[1.25rem] leading-[150%] inline-block w-[18.13rem]">
                    {description}
                </div>
            </div>
        </div>
    )
}

const WhatWeDo: FC = () => {

    return (
        <div className="mt-10">
        <div className="text-[1.25rem] text-black font-subtitle-is-4 px-5 md:px-20 py-10">
            <div className="text-[1.5rem] flex flex-row items-center gap-2">
                <div className="bg-primary-active w-[2.5rem] h-[0.25rem]" />
                <div className="leading-[120%]">
                    What we do
                </div>
            </div>
            <div>
                <h2 className="text-[1.8rem] md:text-[3rem] lg:text-[4rem] flex text-shades-700 items-center">
                    We offer a complete range of bespoke design and development services to
                    help you turn your ideas into digital masterpieces
                </h2>
            </div>

            <div className="py-4 gap-10 grid place-items-center m-auto md:grid-cols-2 lg:grid-cols-4 mt-16">
                <ServiceItem
                        title="Web development"
                        description="We use cutting-edge web development technologies to help our clients
                        fulfill their business goals through functional, reliable solutions."
                        iconPath="/src/assets/images/what-we-do/WebDevIcon.svg"
                />

                <ServiceItem
                    title="User experience & design"
                    description="Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
                    iconPath="/src/assets/images/what-we-do/UXIcon.svg"
                />

                <ServiceItem
                    title="Mobile app development"
                    description="Our extensive mobile development experience allows us to create custom
                    native and cross-platform iOS and Android mobile solutions for our
                    clients."
                    iconPath="/src/assets/images/what-we-do/AppDevIcon.svg"
                />

                <ServiceItem
                    title="Blockchain solutions"
                    description="We conduct market research to determine the optimal blockchain-based
                    solutions to help you grow your company and achieve your business
                    goals."
                    iconPath="/src/assets/images/what-we-do/BlockchainIcon.svg"
                />
            </div>
        </div>
        </div>
    );
};

export default WhatWeDo;

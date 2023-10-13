import {FC} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

interface CaseStudyProps {
 title: string
 description: string
 imagePath: string
}

const CaseStudy: FC<CaseStudyProps> = ({ title, imagePath, description }) => {
    return (<div className="relative max-w-xs mx-auto ml:0 md:ml-2" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}>
            <img src={imagePath} alt="Card Image" className="w-full h-auto" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-b from-transparent via-transparent to-black opacity-100">
                <h2 className="text-white text-2xl font-semibold mb-2 leading-[120%]">{title}</h2>
                <p className="text-white text-sm leading-[150%]">{description}</p>
            </div>
        </div>)
}

const CaseStudies: FC = () => {
    return (
        <div className="mt-10">
        <div className="text-shades-white font-subtitle-is-5 px-5 md:px-20 py-10">
            <div className="w-[11.44rem] h-[1.88rem] text-[1.25rem] text-black flex flex-row items-center gap-2">
                <div className="bg-primary-active w-[2.5rem] h-[0.25rem]" />
                <div className="left-[3.75rem] leading-[150%]">Case studies</div>
            </div>

            <div className="mt-16 bg-orange-300">
                <Carousel arrows={true} infinite={true} responsive={responsive}>
                    <div>
                        <CaseStudy
                            title="The Olympian"
                            description="The only athlete in the world to do her Olympic routine in 2020."
                            imagePath="/src/assets/images/case-studies/olympian.png"
                        />
                    </div>
                    <div>
                        <CaseStudy
                            title="The Savings Jar"
                            description="Grow your savings treasure and grow your dragon."
                            imagePath="/src/assets/images/case-studies/savings-jar.png"
                        />
                    </div>
                    <div>
                        <CaseStudy
                            title="Skhokho seMali"
                            description="Helping South Africans become #CashCleva with Skhokho and TymeBank."
                            imagePath="/src/assets/images/case-studies/skhokho.png"
                        />
                    </div>
                </Carousel>
            </div>
        </div>
        </div>
    );
};

export default CaseStudies;

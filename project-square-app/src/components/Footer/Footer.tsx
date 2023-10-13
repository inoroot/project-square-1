import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (
        <div className="w-full text-left text-[1.25rem] text-shades-white font-subtitle-is-5 mt-10">
            <div className="bg-primary-dark px-5 md:px-20 py-10">

                <div className="w-[10.13rem] h-[1.88rem] flex flex-row items-center gap-2">
                    <div className="top-[0.69rem] bg-primary-active w-[2.5rem] h-[0.25rem]" />
                    <a className="[text-decoration:none] left-[3.69rem] leading-[150%] text-[inherit]"
                       target="_blank">
                        Contact us
                    </a>
                </div>

            <div className="flex flex-col lg:flex-row justify-between mt-10">
                <div>
                    <b className="text-[2.5rem] leading-[140%] text-shades-200">
                        <p className="m-0">Have a project in mind?</p>
                        <p className="m-0">Let's make it happen</p>
                    </b>
                </div>

                <div>
                    <div className="leading-[150%] inline-block">
                        <p className="m-0">22 Street Name, Suburb, 8000,</p>
                        <p className="m-0">Cape Town, South Africa</p>
                        <p className="m-0">+27 21 431 0001</p>
                        <p className="m-0 [text-decoration:underline]">
                            enquirie@website.co.za
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0 mt-10">
                <div className="leading-[150%] flex flex-col">
                    <a href="#" className="m-0 text-white [text-decoration:none]">Terms of service</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Privacy policy</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Impressum</a>
                </div>

                <div className="leading-[150%] flex flex-col">
                    <a href="#" className="m-0 text-white [text-decoration:none]">Facebook</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Instagram</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Twitter</a>
                </div>

                <div className="leading-[150%] flex flex-col">
                    <a href="#" className="m-0 text-white [text-decoration:none]">Github</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Linkedin</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Teams</a>
                </div>

                <div className="leading-[150%] flex flex-col">
                    <a href="#" className="m-0 text-white [text-decoration:none]">Youtube</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Behance</a>
                    <a href="#" className="m-0 text-white [text-decoration:none]">Dribbble</a>
                </div>

                <div className="leading-[150%] flex flex-col">
                    <a href="#" className="m-0 text-white [text-decoration:none]">Explore open jobs</a>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">©2000—2023 Company Name</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Footer;

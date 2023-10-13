import { FC } from "react";
import {Button} from "../Button/Button.tsx";

const SiteHeader: FC = () => {
    return (
        <nav className="bg-purple-700 dark:bg-purple-700 fixed w-full z-20 top-0 left-0 border-b">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <a href="/" className="flex items-center">
                    <img src="src/assets/images/logo.png" className="h-8 mr-3" alt="Logo" />
                </a>

                <div className="flex md:order-2">
                    <Button>Let's Talk</Button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                <div className="items-center justify-between justify-items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="list-none flex flex-col md:p-0 font-medium border rounded-lg md:flex-row md:space-x-8 md:border-0">
                        <li>
                            <a href="#" className="block pl-3 pr-4 text-white [text-decoration:none] rounded md:bg-transparent" aria-current="page">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block pl-3 pr-4 text-white [text-decoration:none] rounded hover:bg-gray-100 ">Industries</a>
                        </li>
                        <li>
                            <a href="#" className="block pl-3 pr-4 text-white [text-decoration:none] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Cases</a>
                        </li>
                        <li>
                            <a href="#" className="block pl-3 pr-4 text-white [text-decoration:none] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default SiteHeader;

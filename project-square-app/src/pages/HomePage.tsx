import Footer from "../components/Footer/Footer.tsx";
import Brands from "../containers/Brands/Brands.tsx";
import CaseStudies from "../containers/CaseStudies/CaseStudies.tsx";
import WhatWeDo from "../containers/WhatWeDo/WhatWeDo.tsx";
import Hero from "../containers/Hero/Hero.tsx";
import Header from "../components/Navbar/Header.tsx";

export const HomePage = () => {
    return (
       <div>
           <Header />
           <Hero />
           <WhatWeDo />
           <CaseStudies />
           <Brands />
           <Footer />
       </div>
    );
};

import React from "react";
import NavBar from "../components/NavBar.js";
// import SkillCloud from "../components/SkillsCloud.js";
import SkillsSection from "../components/SkillsSection.js";
import Footer from "../components/FooterSection.js";



function SkillsPage(){


    return (
        <>
        <NavBar/>
        <SkillsSection/>
        {/* <SkillCloud/> */}
        <Footer/>
        </>
    )
}

export default SkillsPage;
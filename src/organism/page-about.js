import React from "react";
import Navbar from "../molecules/navbar";
import JumbotronAbout from "../molecules/molecules-about/jumbotronabout";
import MainSkill from "../molecules/molecules-about/mainskill";
import Tools from "../molecules/molecules-about/tools";
import Experience from "../molecules/molecules-about/experience";

const PageAbout = () => {
    return (
        <div>
            <Navbar />
            <JumbotronAbout />
            <MainSkill />
            <Tools />
            <Experience />
        </div>
    )
}

export default PageAbout;
import React from "react";

// import component from molecules folder
import Navbar from "../molecules/navbar";
import JumbotronLanding from "../molecules/molecules-me/jumbotronlanding";
import ProfileSectionLanding from "../molecules/molecules-me/profilesectionlanding";
import MyAimSection from "../molecules/molecules-me/myaimsectionlanding";
import SelectedWorkLanding from "../molecules/molecules-me/selectedworklanding";

const PageMe = () => {
    return (
        <>
            <Navbar />
            <JumbotronLanding />
            <ProfileSectionLanding />
            <MyAimSection />
            <SelectedWorkLanding />
        </>
        
    )
}

export default PageMe;
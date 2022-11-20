import React from "react";

// import component from molecules folder
import Navbar from "../molecules/navbar";
import JumbotronLanding from "../molecules/jumbotronlanding";
import ProfileSectionLanding from "../molecules/profilesectionlanding";
import MyAimSection from "../molecules/myaimsectionlanding";
import SelectedWorkLanding from "../molecules/selectedworklanding";

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
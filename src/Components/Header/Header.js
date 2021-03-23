import React from "react";
import "./Header.css";
import Buttons from "./Buttons"

const Header = ({ activities }) => {
    console.log(activities)
    return(
        <div className="header">
            <Buttons activities={activities}/>
        </div>
    );
};

export default Header;
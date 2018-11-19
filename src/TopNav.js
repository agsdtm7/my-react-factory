import React from "react";
import classnames from 'classnames';
import "./TopNav.css";

const TopNav = () => {
    return (
        <div className="topnav">
            <a onClick={activeLink} className={classes} href="#home">Home</a>
            <a onClick={activeLink} href="#about">About</a>
            <a onClick={activeLink} href="#service">Service</a>
            <a onClick={activeLink} href="#contact">Contact</a>
        </div>
    );
}

export default TopNav;
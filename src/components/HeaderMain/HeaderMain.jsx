import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./HeaderMain.module.css";


const HeaderMain = ({children}) => {
    return (
        <header className={style.main}>
            <Navbar />
            {children}
        </header>
    )
};

export default HeaderMain;

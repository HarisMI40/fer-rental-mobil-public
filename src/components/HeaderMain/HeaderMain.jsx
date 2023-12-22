import React from "react";
import Navbar from "../Navbar/Navbar";
import style from "./HeaderMain.module.css";


const HeaderMain = ({children}) => {
    return (
        <div className={style.main}>
            <Navbar />
            {children}
        </div>
    )
};

export default HeaderMain;

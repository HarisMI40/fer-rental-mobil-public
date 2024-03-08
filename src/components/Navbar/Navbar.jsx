import React from "react";
import style from "./Navbar.module.css";
import OffcanvasIndex from "../Offcanvas/OffcanvasIndex";
import { Container } from "react-bootstrap";
import Brand from "../Brand/Brand";
const Navbar = () => {
  return (
    
    <div className={style.navbar}>
       <Brand />
        <div className={style.collapse}>
          <div className={style.item}>
            <ul>
              <li><a href="#ourService">Our Services</a></li>
              <li><a href="#whyUs">Why Us</a></li>
              <li><a href="#testimony">Testimony</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className={style.toggle}>
          <OffcanvasIndex />
        </div>
    </div>
  );
};

export default Navbar;

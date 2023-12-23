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
              <li>Our Services</li>
              <li>Why Us</li>
              <li>Testimonial</li>
              <li>FAQ</li>
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

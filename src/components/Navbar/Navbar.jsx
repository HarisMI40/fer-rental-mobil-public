import React from "react";
import style from "./Navbar.module.css";
import OffcanvasIndex from "../Offcanvas/OffcanvasIndex";
import { Container } from "react-bootstrap";
import Brand from "../Brand/Brand";
import Button from "react-bootstrap/Button";

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Brand />
      <div className={style.collapse}>
        <div className={style.item}>
          <ul>
            <li>
              <a href="#ourService">Our Services</a>
            </li>
            <li>
              <a href="#whyUs">Why Us</a>
            </li>
            <li>
              <a href="#testimony">Testimony</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <p className="fw-bold">{email}</p>
              <Button variant="danger" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </li>
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

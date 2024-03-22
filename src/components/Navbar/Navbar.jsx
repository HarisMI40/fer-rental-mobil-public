import React from "react";
import style from "./Navbar.module.css";
import OffcanvasIndex from "../Offcanvas/OffcanvasIndex";
import Brand from "../Brand/Brand";
import Button from "react-bootstrap/Button";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeDataAuth } from "../../../features/auth/authSlice";







const Navbar = () => {

  // const {email} = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // const isLogin = email !== "" && token;
  const isLogin = token;


  const toLogin = () => {
    navigate("/register")
  }

  const handleLogout = () => {
    dispatch(removeDataAuth())
    window.location.href = "/login";
  };


  return (
    <nav className={style.navbar}>
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
              {
                isLogin 
                ? 
                (
                  <Button variant="danger" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                )
                :
                (
                  <Button variant="success" size="sm" onClick={toLogin}>
                    Register
                  </Button>
                )
              }
              
            </li>
          </ul>
        </div>
      </div>

      <div className={style.toggle}>
        <OffcanvasIndex />
      </div>
    </nav>
  );
};

export default Navbar;

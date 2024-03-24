import { useEffect } from "react";
import style from "./Navbar.module.css";
import OffcanvasIndex from "../Offcanvas/OffcanvasIndex";
import Brand from "../Brand/Brand";
import Button from "react-bootstrap/Button";
// import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeDataAuth } from "../../../features/auth/authSlice";

const Navbar = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  // const {email} = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // const isLogin = email !== "" && token;
  const isLogin = token;

  const toLogin = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    dispatch(removeDataAuth());
    window.location.href = "/login";
  };

  return (
    <nav className={style.navbar}>
      <Brand />
      <div className={style.collapse}>
        <div className={style.item}>
          <ul>
            <li>
              <a href="/#ourService">Our Services</a>
            </li>
            <li>
              <a href="/#whyUs">Why Us</a>
            </li>
            <li>
              <a href="/#testimony">Testimony</a>
            </li>
            <li>
              <a href="/#faq">FAQ</a>
            </li>
            <li>
              {isLogin ? (
                <Button variant="danger" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Button variant="success" size="sm" onClick={toLogin}>
                  Register
                </Button>
              )}
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

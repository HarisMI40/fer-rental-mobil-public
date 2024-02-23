import { Col, Row } from "react-bootstrap";
import Brand from "../Brand/Brand";
import style from "./Footer.module.css";
import icon_facebook from "./../../assets/icon_footer/icon_facebook.svg";
import icon_instagram from "./../../assets/icon_footer/icon_instagram.svg";
import icon_mail from "./../../assets/icon_footer/icon_mail.svg";
import icon_twitch from "./../../assets/icon_footer/icon_twitch.svg";
import icon_twitter from "./../../assets/icon_footer/icon_twitter.svg";

const Footer = () => {
  return (
    <Row>
      <Col md={3} className="mb-4 my-md-0">
        <div className={`subtitle ${style.subtitle}`}>
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </div>
        <div className={`subtitle ${style.subtitle} my-3`}>
          binarcarrental@gmail.com
        </div>
        <div className={`subtitle ${style.subtitle} my-3`}>081-233-334-808</div>
      </Col>
      <Col md={3} className="mb-4 my-md-0">
        <div>Our services</div>
        <div className="my-3">Why Us</div>
        <div className="my-3">Testimonial</div>
        <div>FAQ</div>
      </Col>
      <Col md={3} className="mb-4 my-md-0">
        <div className={`subtitle ${style.subtitle}`}>Connect with us</div>
        <ul className={style.listMedsos}>
          <li>
            <img src={icon_facebook} />
          </li>
          <li>
            <img src={icon_instagram} />
          </li>
          <li>
            <img src={icon_mail} />
          </li>
          <li>
            <img src={icon_twitch} />
          </li>
          <li>
            <img src={icon_twitter} />
          </li>
        </ul>
      </Col>
      <Col md={3}>
        <div className={`subtitle ${style.subtitle}`}>Copyright Binar 2022</div>
        <div className={style.brand}>
          <Brand />
        </div>
      </Col>
    </Row>
  );
};

export default Footer;

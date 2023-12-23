import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hamburger from "../icons/Hamburger";
import style from "./OffcanvasIndex.module.css"
const OffcanvasIndex = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Hamburger onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>BCR</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className={style.listMenu}>
            <li>Our Services</li>
            <li>Why Us</li>
            <li>Testimony</li>
            <li>FAQ</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasIndex;

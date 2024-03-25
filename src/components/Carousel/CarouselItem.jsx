import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import starImage from "../../assets/carousel-image/star.svg";
import style from "./carouselItem.module.css";

const CarouselItem = ({image}) => {
    const star = Array.from(Array(5).keys());
    
  return (
    <div style=
        {{
            height : "200px", 
            width: "95%", 
            overflow:"hidden", 
            margin : "50px", 
            borderRadius:"8px", 
            background:"#F1F3FF"
        }} 
        
        className={`${style.container} shadow-sm`}>
        <Container>
            <Row>
                <Col md={4}>
                    <img src={image} className={`${style.image} rounded-circle`} alt="Foto1" />
                </Col>
                <Col md={8}>
                    <div className={`${style.start} d-flex my-2`}>
                        {star.map((star) => (
                            <img src={starImage} width="16px" className="mx-1" key={star} />
                        ))}
                    </div>
                    <div className="fw-bold my-2">“Lorem ipsum dolor sit amet</div>

                    <h6 className="">John Dee 32, Bromo</h6>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default CarouselItem;

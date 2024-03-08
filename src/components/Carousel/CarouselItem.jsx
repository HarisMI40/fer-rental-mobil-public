import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import starImage from "../../assets/carousel-image/star.svg";

const CarouselItem = ({image}) => {
    const star = Array.from(Array(5).keys());
    
  return (
    <div style={{height : "200px", margin : "50px", borderRadius:"8px", background:"#F1F3FF"}} className="shadow-sm p-5">
        <Container>
            <Row>
                <Col md={2}>
                    <img src={image} className="rounded-circle" alt="Foto1" />
                </Col>
                <Col>
                    <div className="d-flex">
                        {star.map((star) => (
                            <img src={starImage} width="16px" className="mx-1" key={star} />
                        ))}
                    </div>
                    <div className="fw-bold my-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</div>

                    <div className="">John Dee 32, Bromo</div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default CarouselItem;

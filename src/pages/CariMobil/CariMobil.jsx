import { useState } from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Hero from "../../components/Hero/Hero";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardCariMobil from "../../components/CardCariMobil/CardCariMobil";
import style from "./CariMobil.module.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const CariMobil = () => {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [car, setCar] = useState({ cars: [] });

  const setActiveHandler = () => {
    setIsActiveInput(true);
  };

  const setBlurHandler = () => {
    setIsActiveInput(false);
  };

  const styleBayangan = {
    backgroundColor: "rgba(0, 0, 0, 0.60)",
    zIndex: "99",
  };

  return (
    <div className="position-relative">
      {/* rgba(0, 0, 0, 0.60) */}
      <div
        className={style.bayangan}
        style={isActiveInput ? styleBayangan : {}}
      ></div>
      <HeaderMain>
        <Hero isButtonActive={false} />
      </HeaderMain>

      <Container className={style.containerCardCariMobil}>
        <CardCariMobil
          onActiveHandler={setActiveHandler}
          onBlurHandler={setBlurHandler}
          setCar={setCar}
        />
      </Container>

      <Container>
        <Row>
          {car.cars.map((car) => (
            <Col md={4} key={car.id}>
              <Card className="my-2">
                <Card.Img
                  variant="top"
                  src={car.image}
                  height="200px"
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Subtitle className="my-2 text-muted">
                    RP {car.price} / hari
                  </Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <div className="d-grid gap-2">
                    <Link to={`/detail-mobil/${car.id}`} className="link">
                      <Button
                        variant="success"
                        size="lg"
                        style={{ borderRadius: "0px" }}
                      >
                        Pilih Mobil
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className={style.containerFooter}>
        <Footer />
      </Container>
    </div>
  );
};

export default CariMobil;

import { useEffect, useState } from "react";
import CardCariMobil from "../../components/CardCariMobil/CardCariMobil";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Hero from "../../components/Hero/Hero";
import style from "./DetailMobil.module.css"
import { Card, Col, Container, Row } from "react-bootstrap";
import CardDetail from "../../components/CardDetail/CardDetail";
import Footer from "../../components/Footer/Footer";
import { useParams, useSearchParams } from "react-router-dom";

const DetailMobil = () => {
    const [mobil, setMobil] = useState({});
    const {idCar} = useParams();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://api-car-rental.binaracademy.org/customer/car/${idCar}`);
            const data = await res.json()

            setMobil(data)
        }

        getData();
    })
    return (
    <>
        <HeaderMain>
    
        </HeaderMain>
        <Container className={style.containerCardCariMobil}>
            <CardCariMobil disable={true}/>
        </Container>

        <Container>
            <Row>
                <Col md={8}>
                    <CardDetail />
                </Col>
                <Col md={4}>
                    <Card className={style.card} style={{ width: '405px' }}>
                        <Card.Img variant="top" src={mobil.image} className="p-4"/>
                        <Card.Body>
                            <Card.Title>{mobil.name}</Card.Title>
                            <Card.Subtitle className="text-muted my-3">6 - 8 orang</Card.Subtitle>
                            <div className="d-flex justify-content-between my-5">
                                <div>Harga : </div>
                                <div className="fw-bold">Rp. {mobil.price}</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        <Container>
            <Footer />
        </Container>
    </>
    );
};

export default DetailMobil;

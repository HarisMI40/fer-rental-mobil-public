import { useEffect, useState } from "react";
import CardCariMobil from "../../components/CardCariMobil/CardCariMobil";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Hero from "../../components/Hero/Hero";
import style from "./DetailMobil.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardDetail from "../../components/CardDetail/CardDetail";
import Footer from "../../components/Footer/Footer";
import { useParams, useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const DetailMobil = () => {
  const [mobil, setMobil] = useState({});
  const { idCar } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api-car-rental.binaracademy.org/customer/car/${idCar}`
      );
      const data = await res.json();

      setMobil(data);
    };

    getData();
  }, [idCar]);

  return (
    <>
      <HeaderMain></HeaderMain>
      <Container className={style.containerCardCariMobil}>
        <CardCariMobil disable={true} />
      </Container>

      <Container>
        <Row>
          <Col md={8}>
            <CardDetail />
          </Col>
          <Col md={4}>
            <Card className={style.card}>
              <Card.Img variant="top" src={mobil.image} className="p-4" />
              <Card.Body>
                <Card.Title>{mobil.name}</Card.Title>
                <Card.Subtitle className="text-muted my-3">
                  6 - 8 orang
                </Card.Subtitle>
                <div className="d-flex flex-column">
                  <div className="mb-3">
                    <label className="mb-2">
                      Tentukan lama sewa mobil (max. 7 hari):
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className="form-control"
                      placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                      dateFormat="dd/MM/yyyy"
                      maxDate={addDays(new Date(), 7)}
                      wrapperClassName="w-100"
                      isClearable
                    />
                  </div>

                  <div className="mb-3">
                    Harga: <span className="fw-bold">Rp. {mobil.price}</span>
                  </div>
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

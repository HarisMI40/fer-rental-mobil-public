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
import { Button } from "react-bootstrap";

const DetailMobil = () => {
  const [mobil, setMobil] = useState({});
  const { idCar } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const OnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
                      showIcon
                      popperClassName={style.popCon}
                      selected={startDate}
                      onChange={OnChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      className="form-control"
                      placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                      dateFormat="dd/MM/yyyy" // Set the date format
                      maxDate={addDays(new Date(), 7)}
                      wrapperClassName={style.datePicker}
                      isClearable
                      showMonthDropdown
                      scrollableMonthYearDropdown
                      dayClassName={(date) =>
                        startDate &&
                        endDate &&
                        date >= startDate &&
                        date <= endDate &&
                        !(
                          date.toISOString().slice(0, 10) ===
                          startDate?.toISOString().slice(0, 10)
                        ) &&
                        !(
                          date.toISOString().slice(0, 10) ===
                          endDate?.toISOString().slice(0, 10)
                        )
                          ? style.selectedRange
                          : date.toISOString().slice(0, 10) ===
                            startDate?.toISOString().slice(0, 10)
                          ? `${style.selectedStart} ${style.roundedCircle} ${style.roundedCircle} `
                          : date.toISOString().slice(0, 10) ===
                            endDate?.toISOString().slice(0, 10)
                          ? `${style.selectedEnd} ${style.roundedCircle} ${style.roundedCircle}`
                          : ""
                      }
                    />
                  </div>
                  <div className="mb-3">
                    Harga: <span className="fw-bold">Rp. {mobil.price}</span>
                  </div>
                  <div>
                    <div className="d-grid gap-2">
                      <Button variant="success" size="md">
                        Lanjut Pembayaran
                      </Button>
                    </div>
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

import { Card, Col, Row } from "react-bootstrap";
import style from "./WhyUs.module.css";
import iconComplete from "../../assets/icon_card/icon_complete.svg"
import iconPrice from "../../assets/icon_card/icon_price.svg"
import iconProfessional from "../../assets/icon_card/icon_professional.svg"
import icon24hrs from "../../assets/icon_card/icon_24hrs.svg"

const WhyUs = () => {
    return (
    <div className={style.containerWhyUs}>
        <Row>
            <Col>
                <div className={style.title}>
                    Why Us?
                </div>
                <div className={style.subtitle}>
                    Mengapa harus pilih Binar Car Rental?
                </div>
            </Col>
        </Row>

        <Row className={style.listItem}>
            <Col sm={12} lg={3}>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title><img src={iconComplete} /></Card.Title>
                        <Card.Subtitle className="fw-bold my-3">Mobil Lengkap</Card.Subtitle>
                        <Card.Text className="fw-medium">
                        Tersedia banyak pilihan mobil, <br /> kondisi masih baru, bersih dan terawat
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} lg={3}>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title><img src={iconPrice} /></Card.Title>
                        <Card.Subtitle className="fw-bold my-3">Harga Murah</Card.Subtitle>
                        <Card.Text className="fw-medium">
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} lg={3}>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title className={style.titleList}><img src={icon24hrs} /></Card.Title>
                        <Card.Subtitle className="fw-bold my-3">Layanan 24 Jam</Card.Subtitle>
                        <Card.Text className="fw-medium">
                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} lg={3}>
                <Card className="my-2">
                    <Card.Body>
                        <Card.Title><img src={iconProfessional} /></Card.Title>
                        <Card.Subtitle className="fw-bold my-3">Sopir Profesional</Card.Subtitle>
                        <Card.Text className="fw-medium">
                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>
    );
};

export default WhyUs;

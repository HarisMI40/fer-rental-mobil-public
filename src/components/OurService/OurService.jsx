import { Col, Row } from "react-bootstrap";
import style from "./OurService.module.css";
import imgGirl from "../../assets/girl.svg"
import iconList from "../..//assets/icon_list.svg"


const OurService = () => {
    return (
    <>
        <Row>
            <Col>
            <div className={style.ourServiceImage}>
                <img src={imgGirl} />
            </div>
            </Col>

            <Col>
            <div className={style.ourServiceDescription}>
                <div className={style.title}>
                Best Car Rental for any kind of trip in (Lokasimu)!
                </div>
                <div className={style.description}>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                <ul className={style.list}>
                    <li>
                    <img src={iconList} /> 
                    <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
                    </li>

                    <li>
                    <img src={iconList} />
                    <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
                    </li>


                    <li>
                    <img src={iconList} /> 
                    <span>Sewa Mobil Jangka Panjang Bulanan</span>
                    </li>

                    <li>
                    <img src={iconList} /> 
                    <span>Gratis Antar - Jemput Mobil di Bandara</span>
                    </li>

                    <li>
                    <img src={iconList} /> 
                    <span>Layanan Airport Transfer / Drop In Out</span>
                    </li>
                    
                </ul>
                </div>
            </div>
            </Col>
        </Row>
    </>
    );
};

export default OurService;

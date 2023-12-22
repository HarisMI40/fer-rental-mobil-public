import React from "react";
import style from "./hero.module.css"
import Navbar from "../Navbar/Navbar";
import imgCar from "../../assets/img_car.svg"
const Hero = () => {
    return (
        <div className={style.main}>
                <Navbar />

                <div className={style.containerHero}>
                    <div className={style.containerDisplay}>
                        <div className={style.textHero}>
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                        </div>

                        <div className={style.textParagraph}>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </div>
                        <div>
                            <button className={style.buttonAction}>Mulai Sewa Mobil</button>{' '}

                        </div>
                    </div>
                    <div className={style.containerImage}>
                        <img src={imgCar} className="" />
                    </div>
                </div>
        </div>
    );
};

export default Hero;

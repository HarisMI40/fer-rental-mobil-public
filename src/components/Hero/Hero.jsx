import React from "react";
import style from "./hero.module.css";
import imgCar from "../../assets/img_car.svg";
import { Link } from "react-router-dom";
import ButtonAuth from "../Elements/Button";

const Hero = ({ isButtonActive = true }) => {
  return (
    <div className={style.containerHero}>
      <div className={style.containerDisplay}>
        <div className={style.textHero}>
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </div>

        <div className={style.textParagraph}>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </div>
        {isButtonActive && (
          <div className="mt-4">
            <Link to={`cari-mobil`} className={style.buttonAction}>
              Mulai Sewa Mobil
            </Link>{" "}
            <ButtonAuth text="Login" />
            {/* numpang testing yoww */}
          </div>
        )}
      </div>
      <div className={style.containerImage}>
        <img src={imgCar} className="" />
      </div>
    </div>
  );
};

export default Hero;

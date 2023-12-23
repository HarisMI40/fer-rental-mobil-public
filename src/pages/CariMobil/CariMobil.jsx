import {useState} from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Hero from "../../components/Hero/Hero";
import { Container } from "react-bootstrap";
import CardCariMobil from "../../components/CardCariMobil/CardCariMobil";
import style from "./CariMobil.module.css"
import Footer from "../../components/Footer/Footer";
const CariMobil = () => {
    const [isActiveInput, setIsActiveInput] = useState(false);

    const setActiveHandler = () => {
        setIsActiveInput(true)
    }

    const setBlurHandler = () => {
        setIsActiveInput(false)
    }

    
  return (
    <div className="position-relative">
        {/* rgba(0, 0, 0, 0.60) */}
        <div className={style.bayangan} style={{backgroundColor : isActiveInput ? "rgba(0, 0, 0, 0.60)" : ""}}></div>
        <HeaderMain>
            <Hero isButtonActive={false}/>
            
        </HeaderMain>

        <Container className={style.containerCardCariMobil}>
            <CardCariMobil onActiveHandler={setActiveHandler} onBlurHandler={setBlurHandler}/>
        </Container>

        <Container className={style.containerFooter}>
                <Footer/>
        </Container>
    </div>
  );
};

export default CariMobil;

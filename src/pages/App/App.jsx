import { Col, Container, Row } from "react-bootstrap";
import style from "./app.module.css"
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Hero from "../../components/Hero/Hero";
import OurService from "../../components/OurService/OurService";
import WhyUs from "../../components/WhyUs/WhyUs";
import CtaBanner from "../../components/CtaBanner/CtaBanner";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
function App() {

  return (
    <div>
      <HeaderMain>
        <Hero />
      </HeaderMain>

      <Container className={style.containerOurService} id="ourService">
        <OurService />
      </Container>

      <Container id="whyUs">
        <WhyUs />
      </Container>

      <Container className={style.containerCtaBanner}>
        <CtaBanner />
      </Container>

      <Container className={style.containerFaq} id="faq">
        <Faq/>
      </Container>


      <Container className={style.containerFooter}>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;

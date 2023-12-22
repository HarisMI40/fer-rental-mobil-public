import { Col, Container, Row } from "react-bootstrap";
import style from "./app.module.css"
import HeaderMain from "./components/HeaderMain/HeaderMain";
import Hero from "./components/Hero/Hero";
import OurService from "./components/OurService/OurService";
import WhyUs from "./components/WhyUs/WhyUs";
function App() {

  return (
    <div className={style.container}>
      <HeaderMain>
        <Hero />
      </HeaderMain>

      <Container className={style.containerOurService}>
        <OurService />
      </Container>

      <Container>
        <WhyUs />
      </Container>
    </div>
  );
}

export default App;

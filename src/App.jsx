import style from "./app.module.css"
import HeaderMain from "./components/HeaderMain/HeaderMain";
import Hero from "./components/Hero/Hero";
function App() {

  return (
    <div className={style.container}>
      <HeaderMain>
        <Hero />
      </HeaderMain>
    </div>
  );
}

export default App;

import style from "./Brand.module.css";
import { Link } from "react-router-dom";

const Brand = () => {
  return <Link to="/" className={style.brand}></Link>;
};

export default Brand;

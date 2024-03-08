import style from "./Brand.module.css";
import { Link } from "react-router-dom";

const Brand = () => {
  return <Link href="/" className={style.brand}></Link>;
};

export default Brand;

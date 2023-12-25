import arrowRight from "../../assets/carousel-image/arrow_right.svg"
const CustomLeftArrow = () => {
  return <button style={{left: "calc(44% + 1px)",bottom: "5px",transform:"rotate(180deg)", background : "#5CB85F", color:"white", fontSize: "27px", fontWeight : "bold"}} className="d-flex align-items-center justify-content-center react-multiple-carousel__arrow"><img src={arrowRight} /></button>;
};

export default CustomLeftArrow;

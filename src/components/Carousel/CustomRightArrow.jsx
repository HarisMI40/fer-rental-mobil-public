import React from "react";
import arrowRight from "../../assets/carousel-image/arrow_right.svg"
const CustomRightArrow = () => {
    // return <button style={{right: "calc(44% + 1px)", background : "#5CB85F", color:"white", fontSize: "27px", fontWeight : "bold"}} className="d-flex align-center justify-content-center react-multiple-carousel__arrow">{">"}</button>;
    return <button style={{right: "calc(44% + 1px)",bottom: "20px", background : "#5CB85F", color:"white", fontSize: "27px", fontWeight : "bold"}} className="d-flex align-items-center justify-content-center react-multiple-carousel__arrow"><img src={arrowRight} /></button>;
};

export default CustomRightArrow;

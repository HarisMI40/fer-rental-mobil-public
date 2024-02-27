import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCompleted,
  updateStep,
} from "../../../../../../../../features/stepPembayaran/stepPembayaranSlice";

const Button = (props) => {
  const dispatch = useDispatch();
  const { metode_pembayaran } = useSelector((state) => state.stepPembayaran);

  return (
    <button
      {...props}
      type="button"
      onClick={() => {
        dispatch(updateStep(2));
        dispatch(updateCompleted(1));
      }}
      disabled={metode_pembayaran == ""}
    >
      Bayar
    </button>
  );
};

export default Button;

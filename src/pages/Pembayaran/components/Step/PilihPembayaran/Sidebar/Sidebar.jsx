import { useEffect, useState } from "react";
import fi_users from "../../../../../../assets/icon_card/fi_users.svg";
import style from "./Sidebar.module.css";

import Button from "./component/Button";
import getNumberOfDays from "../../../../../../../helpers/getNumberOfDays";
import axios from "axios";


const Sidebar = () => {
  const [dataOrder, setDataOrder] = useState({});


  useEffect(() => {
    async function getData() {
      const {idOrder} = JSON.parse(localStorage.getItem("dataOrder"));

      const response = await axios.get(
        `customer/order/${idOrder}`,
      );

      const data = response.data;
      setDataOrder(data);

    }

    getData();
  }, []);

  // return;

  return (
    <div className={`${style.sidebar} border p-4`}>
      {/* <button onClick={() => console.log(orderDetail)}></button> */}
      <div>
        <h4>{dataOrder?.Car?.name}</h4>
        <div className="d-flex gap-3">
          <img src={fi_users} />
          <span className="text-muted fs-6 fw-light">{"4 - 5 orang"}</span>
        </div>
      </div>

      <div className="mt-5 border-bottom">
        <div className="d-flex justify-content-between">
          <div>Total</div>
          <div>Rp. {dataOrder?.total_price?.toLocaleString('id-ID')}</div>
        </div>

        <div className="mt-4">
          <div>Harga</div>
          <div className="d-flex justify-content-between">
            <div>
              <ul>
                <li>
                  <div>Sewa Mobil</div>
                  <div className="text-muted fw-bold">
                    Rp.{dataOrder?.Car?.price?.toLocaleString('id-ID')} x{" "}
                    {getNumberOfDays("2024-01-01", "2024-01-02")} Hari
                  </div>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="">
                Rp{" "}
                {(dataOrder?.Car?.price *
                  getNumberOfDays("2024-01-01", "2024-01-02")).toLocaleString('id-ID')}
              </div>
            </div>
          </div>

          <div>Biaya Lainnya</div>
          <div className="d-flex justify-content-between">
            <div>
              <ul>
                <li>Pajak</li>
                <li>Biaya Makan Sopir</li>
              </ul>
            </div>
            <div className="">
              <div className="text-success fw-bold">Termasuk</div>
              <div className="text-success fw-bold">Termasuk</div>
            </div>
          </div>

          <div>Belum Termasuk</div>
          <div className="d-flex justify-content-between">
            <div>
              <ul>
                <li>Bensin</li>
                <li>Tol dan Parkir</li>
              </ul>
            </div>
            <div className="">
              <div className="text-success fw-bold"></div>
              <div className="text-success fw-bold"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between my-4">
        <div>Total</div>
        <div className="fw-bold">RP.{dataOrder?.total_price?.toLocaleString('id-ID')}</div>
      </div>

      <div className="d-grid gap-2">
        <Button className={`btn btn-success ${style.button_bayar}`} />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import fi_users from "../../../../../../assets/icon_card/fi_users.svg";
import style from "./Sidebar.module.css";
import { useSelector } from "react-redux";

import Button from "./component/Button";
import getNumberOfDays from "../../../../../../../helpers/getNumberOfDays";

const Sidebar = () => {
  const {
    start_rent_at,
    finish_rent_at,
    nama_mobil,
    kapasitas,
    harga,
    total_harga,
  } = useSelector((state) => state.customerOrder);

  return (
    <div className={`${style.sidebar} border p-4`}>
      <div>
        <h4>{nama_mobil}</h4>
        <div className="d-flex gap-3">
          <img src={fi_users} />
          <span className="text-muted fs-6 fw-light">{kapasitas}</span>
        </div>
      </div>

      <div className="mt-5 border-bottom">
        <div className="d-flex justify-content-between">
          <div>Total</div>
          <div>Rp. {total_harga}</div>
        </div>

        <div className="mt-4">
          <div>Harga</div>
          <div className="d-flex justify-content-between">
            <div>
              <ul>
                <li>
                  <div>Sewa Mobil</div>
                  <div className="text-muted fw-bold">
                    Rp.{harga} x{" "}
                    {getNumberOfDays(start_rent_at, finish_rent_at)} Hari
                  </div>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="">
                Rp {harga * getNumberOfDays(start_rent_at, finish_rent_at)}
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
        <div className="fw-bold">RP.{total_harga}</div>
      </div>

      <div className="d-grid gap-2">
        <Button className={`btn btn-success ${style.button_bayar}`} />
      </div>
    </div>
  );
};

export default Sidebar;

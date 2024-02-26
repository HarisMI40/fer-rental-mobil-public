import React from "react";
import fi_users from "../../../../../../assets/icon_card/fi_users.svg";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={`${style.sidebar} border p-4`}>
      <div>
        <h4>Innova</h4>
        <div className="d-flex gap-3">
          <img src={fi_users} />
          <span className="text-muted fs-6 fw-light">4 - 5 orang</span>
        </div>
      </div>

      <div className="mt-5 border-bottom">
        <div className="d-flex justify-content-between">
          <div>Total</div>
          <div>Rp. 3.500.000</div>
        </div>

        <div className="mt-4">
          <div>Harga</div>
          <div className="d-flex justify-content-between">
            <div>
              <ul>
                <li>Sewa Mobil Rp.500.000 x 7 Hari</li>
              </ul>
            </div>
            <div className="">
              <div className="">Rp 3.500.000</div>
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
        <div className="fw-bold">RP. 3.500.000,00</div>
      </div>

      <div class="d-grid gap-2">
        <button class={`btn btn-success ${style.button_bayar}`} type="button">
          Bayar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import style from "./Pembayaran.module.css";
import fi_users from "../../assets/icon_card/fi_users.svg";

const Pembayaran = () => {
  return (
    <div>
      <HeaderMain>
        <Header />
      </HeaderMain>
      <Card>
        <h6>Detail Pesananmu</h6>
        <div className={`${style.container_detail_pesanan}`}>
          <div>
            <p className="m-0">Nama / Tipe Mobil</p>
            <p className="text-muted">Innova</p>
          </div>
          <div>
            <p className="m-0">Kategori</p>
            <p className="text-muted">Innova</p>
          </div>
          <div>
            <p className="m-0">Tanggal Mulai Sewa</p>
            <p className="text-muted">Innova</p>
          </div>
          <div>
            <p className="m-0">Tanggal Akhir Sewa</p>
            <p className="text-muted">Innova</p>
          </div>
        </div>
      </Card>

      <main
        className={`${style.container} container d-flex justify-content-between gap-4`}
      >
        <div className={`${style.content} border p-4`}>
          <h4>Pilih Bank Transfer</h4>
          <p>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </p>

          <div className={`mt-5 d-flex flex-column gap-3`}>
            <div className="d-flex align-items-center gap-3 border-bottom pb-3">
              <div className={`card p-2 d-inline-block w-25 text-center`}>
                BCA
              </div>
              <div>BCA Transfer</div>
            </div>
            <div className="d-flex align-items-center gap-3 border-bottom pb-3">
              <div className={`card p-2 d-inline-block w-25 text-center`}>
                BNI
              </div>
              <div>BNI Transfer</div>
            </div>
            <div className="d-flex align-items-center gap-3 border-bottom pb-3">
              <div className={`card p-2 d-inline-block w-25 text-center`}>
                Mandiri
              </div>
              <div>Mandiri Transfer</div>
            </div>
          </div>
        </div>
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
            <button
              class={`btn btn-success ${style.button_bayar}`}
              type="button"
            >
              Bayar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pembayaran;

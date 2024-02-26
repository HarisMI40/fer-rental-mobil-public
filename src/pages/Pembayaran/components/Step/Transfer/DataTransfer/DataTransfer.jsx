import React from "react";
import style from "./DataTransfer.module.css";
import { Tab, Tabs } from "react-bootstrap";

const DataTransfer = () => {
  return (
    <div className={`${style.containerDataTransfer} d-flex flex-column gap-3`}>
      <div className="border p-4 d-flex justify-content-between align-items-start">
        <div className="d-flex flex-column">
          <h6>Selesaikan Pembayaran Sebelum</h6>
          <p className="text-muted">Rabu, 19 Mei 2022 jam 13.00 WIB</p>
        </div>
        <div className={`${style.boxs} d-flex justify-content-betwen gap-2`}>
          <div className="box">23</div> :<div className="box">55</div> :{" "}
          <div className="box">09</div>
        </div>
      </div>

      <div className="border px-4 py-4">
        <h6>Lakukan Transfer Ke</h6>

        <div className="d-flex align-items-start gap-4 mt-3">
          <div className={`border px-4`}>BCA</div>
          <div>
            <p>BCA Transfer</p>
            <p>a.n Binar Car Rental</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mt-3">
            <label className="mb-2">Nomor Rekening</label>
            <div className="border p-2 d-flex justify-content-between align-items-center">
              <div className="text-muted">54104257877</div>
              <div className="border p-1">copy</div>
            </div>
          </div>
          <div className="mt-3">
            <label className="mb-2">Total Bayar</label>
            <div className="border p-2 d-flex justify-content-between align-items-center">
              <div className="fw-bold">Rp. 3.500.000</div>
              <div className="border p-1">copy</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border p-4">
        <h6>Instruksi Pembayaran</h6>
        <div>
          <Tabs
            defaultActiveKey="ATM-BCA"
            id="uncontrolled-tab-example"
            className={`my-3`}
            variant="underline"
          >
            <Tab eventKey="ATM-BCA" title="ATM BCA">
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek BCA
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No.
                  Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li> Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Tab>
            <Tab eventKey="M-BCA" title="M-BCA">
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek BCA
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No.
                  Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li> Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Tab>
            <Tab eventKey="BCA-KLIK" title="BCA KLIK">
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek BCA
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No.
                  Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li> Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Tab>
            <Tab eventKey="INTERNET-BANKING" title="INTERNET BANKING">
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek BCA
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No.
                  Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li> Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DataTransfer;

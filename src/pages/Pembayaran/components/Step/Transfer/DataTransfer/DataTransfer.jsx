import style from "./DataTransfer.module.css";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import HitungMundur from "../HitungMundur/HitungMundur";
import CopyToClipboard from "react-copy-to-clipboard";

const DataTransfer = () => {
  const bank = useSelector((state) => state.stepPembayaran.metode_pembayaran);

  return (
    <div className={`${style.containerDataTransfer} d-flex flex-column gap-3`}>
      <div className="border p-4 d-flex justify-content-between align-items-start">
        <div className="d-flex flex-column">
          <h6>Selesaikan Pembayaran Sebelum</h6>
          <p className="text-muted">Rabu, 19 Mei 2022 jam 13.00 WIB</p>
        </div>
        <HitungMundur/>
      </div>

      <div className="border px-4 py-4">
        <h6>Lakukan Transfer Ke</h6>

        <div className="d-flex align-items-start gap-4 mt-3">
          <div className={`border px-4`}>{bank.bank}</div>
          <div>
            <p>{bank.deskripsi}</p>
            <p>a.n Binar Car Rental</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="mt-3">
            <label className="mb-2">Nomor Rekening</label>
            <div className="border p-2 d-flex justify-content-between align-items-center">
              <div className="text-muted">{bank.no_rek}</div>
              <div className="border p-1">
              <CopyToClipboard text={bank.no_rek} onCopy={() => alert("Berhasil Menyalin Nomor Rekening")}>
                <button className="btn">copy</button>
              </CopyToClipboard>  
              </div>
            </div>
          </div>
          <div className="mt-3">
            <label className="mb-2">Total Bayar</label>
            <div className="border p-2 d-flex justify-content-between align-items-center">
              <div className="fw-bold">Rp. 3.500.000</div>
              <div className="border p-1">
                <CopyToClipboard text={"3.500.000"} onCopy={() => alert("Berhasil Menyalin Total Harga")}>
                  <button className="btn">copy</button>
                </CopyToClipboard>  
              </div>
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
            <Tab eventKey="ATM-BCA" title={`ATM ${bank.bank}`}>
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek{" "}
                  {bank.bank}
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor {bank.bank} Virtual Account: 70020+Order ID
                  Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li> Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Tab>
            <Tab eventKey="M-BCA" title={`M-${bank.bank}`}>
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek{" "}
                  {bank.bank}
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor {bank.bank} Virtual Account: 70020+Order ID
                  Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li>
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li> Ambil dan simpanlah bukti transaksi tersebut</li>
              </ul>
            </Tab>
            <Tab eventKey="BCA-KLIK" title={`${bank.bank} KLIK`}>
              <ul className="text-muted">
                <li>Masukkan kartu ATM, lalu PIN</li>
                <li>
                  Pilih menu 'Transaksi Lainnya' 'Transfer' – 'Ke Rek{" "}
                  {bank.bank}
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
                  Pilih menu 'Transaksi Lainnya' 'Transfer' - 'Ke Rek{" "}
                  {bank.bank}
                  Virtual Account'
                </li>
                <li>
                  Masukkan nomor {bank.bank} Virtual Account: 70020+Order ID
                  Contoh: No. Peserta: 12345678, maka ditulis 7002012345678
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

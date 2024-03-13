/**
 * Untuk Mengetahui selisih waktu dari waktu pertama dan waktu kedua ( waktu pertama - waktu kedua)
 * @param(date) - waktu pertama
 * @param(date) - waktu kedua
 * @returns 
 */

export default function dataSelisihWaktu(waktuPertama, waktuKedua) {
    // Cari selisih waktu tanggal_1_hari_setelah_created_at - waktu sekarang
    const timeDifference = waktuPertama - waktuKedua;

    // Konversi selisih waktu ke jam, menit, dan detik
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    return {
        jam : hours,
        menit : minutes,
        detik : seconds
    }
  }
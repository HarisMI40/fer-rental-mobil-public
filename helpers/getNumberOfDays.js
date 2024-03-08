/**
 * Digunakan untuk mengetahui jumlah hari diantara 2 tanggal
 * contoh : 2024-02-29 dan 2024-03-01
 * output : 1 ( hari)
 * 
 * @param {date1} start : tanggal mulai rental
 * @param {date2} end  : tanggal akhir rental
 * @returns jumlahHari
 */
export default function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}


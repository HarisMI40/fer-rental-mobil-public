/**
 * Digunakan untuk memformat tanggal menjadi tahun-bulan-tanggal
 * 
 * @param {date} tanggal 
 * @returns 
 */

export default function formatDate(tanggal){
    const year = tanggal.getFullYear()
    const month = String(tanggal.getMonth() + 1).padStart(2, '0')
    const date = String(tanggal.getDate()).padStart(2, '0')

    return `${year}-${month}-${date}`;
}
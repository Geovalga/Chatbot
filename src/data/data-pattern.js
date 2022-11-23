const name = ['siapa nama anda', 'nama anda', 'nama'];
const umur = ['berapa umur anda', 'umur anda', 'umur'];
const sapa = ['halo', 'helo', 'hi'];
const trims = ['terima kasih', 'makasih', 'trims'];
const makian = ['anjing', 'asu', 'babi', 'bangsat', 'monyet'];

const namaToko = ['apa nama toko ini', 'apa nama toko', 'nama toko'];
const umurToko = ['berapa umur toko ini', 'berapa lama toko ini', 'umur toko'];
const pemilikToko = ['siapa pemilik toko ini', 'pemilik toko', 'pemilik'];
const lokasiToko = ['di mana toko ini', 'toko ini di mana', 'lokasi toko'];
const websiteToko = ['di mana website toko ini', 'apa website toko ini', 'website toko'];
const mottoToko = ['apa motto toko ini', 'motto toko', 'motto'];
const visiToko = ['apa visi toko ini', 'visi toko', 'visi'];
const misiToko = ['apa misi toko ini', 'misi toko', 'misi'];
const caraBayarToko = ['apa cara pembayaran yang tersedia di toko ini', 'cara pembayaran yang tersedia', 'cara pembayaran'];
const lowonganToko = ['apakah ada lowongan pekerjaan di toko ini', 'apakah ada lowongan pekerjaan', 'loker'];
const kebutuhanToko = ['apakah toko ini membutuhkan sesuatu', 'apa kebutuhan toko ini', 'toko ini butuh apa'];

// const barangTidakAda = ['];
// const barangKosong = ['];
// const barangTersedia = ['];
// const barangSedikit = ['];
// const barangSedang = ['];
// const barangBanyak = ['];
// const barangPesan = ['];
// const barangRusak = ['];
// const barangJumlah = ['];
// const barangBaru = ['];
// const barangKualitas = ['];

const tinjauanPelanggan = ['apa respons pelanggan lain pada toko ini', 'respons pelanggan lain', 'respons pelanggan'];
const rataPelanggan = ['ada berapa jumlah pelanggan di toko ini', 'berapa pelanggan di toko ini', 'jumlah pelanggan'];



const data = [
  ...name.map(w => ({ phrase: w, result: { name: 1 }})),
  ...umur.map(w => ({ phrase: w, result: { umur: 1 }})),
  ...sapa.map(w => ({ phrase: w, result: { sapa: 1 }})),
  ...trims.map(w => ({ phrase: w, result: { trims: 1 }})),
  ...makian.map(w => ({ phrase: w, result: { makian: 1 }})),

  ...namaToko.map(w => ({ phrase: w, result: { namaToko: 1 }})),
  ...umurToko.map(w => ({ phrase: w, result: { umurToko: 1 }})),
  ...pemilikToko.map(w => ({ phrase: w, result: { pemilikToko: 1 }})),
  ...lokasiToko.map(w => ({ phrase: w, result: { lokasiToko: 1 }})),
  ...websiteToko.map(w => ({ phrase: w, result: { websiteToko: 1 }})),
  ...mottoToko.map(w => ({ phrase: w, result: { mottoToko: 1 }})),
  ...visiToko.map(w => ({ phrase: w, result: { visiToko: 1 }})),
  ...misiToko.map(w => ({ phrase: w, result: { misiToko: 1 }})),
  ...caraBayarToko.map(w => ({ phrase: w, result: { caraBayarToko: 1 }})),
  ...lowonganToko.map(w => ({ phrase: w, result: { lowonganToko: 1 }})),
  ...kebutuhanToko.map(w => ({ phrase: w, result: { kebutuhanToko: 1 }})),

  // ...barangTidakAda.map(w => ({ phrase: w, result: { barangTidakAda: 1 }})),
  // ...barangKosong.map(w => ({ phrase: w, result: { barangKosong: 1 }})),
  // ...barangTersedia.map(w => ({ phrase: w, result: { barangTersedia: 1 }})),
  // ...barangSedikit.map(w => ({ phrase: w, result: { barangSedikit: 1 }})),
  // ...barangSedang.map(w => ({ phrase: w, result: { barangSedang: 1 }})),
  // ...barangBanyak.map(w => ({ phrase: w, result: { barangBanyak: 1 }})),
  // ...barangPesan.map(w => ({ phrase: w, result: { barangPesan: 1 }})),
  // ...barangRusak.map(w => ({ phrase: w, result: { barangRusak: 1 }})),
  // ...barangJumlah.map(w => ({ phrase: w, result: { barangJumlah: 1 }})),
  // ...barangBaru.map(w => ({ phrase: w, result: { barangBaru: 1 }})),
  // ...barangKualitas.map(w => ({ phrase: w, result: { barangKualitas: 1 }})),

  ...tinjauanPelanggan.map(w => ({ phrase: w, result: { tinjauanPelanggan: 1 }})),
  ...rataPelanggan.map(w => ({ phrase: w, result: { rataPelanggan: 1 }})),
];

export default data;

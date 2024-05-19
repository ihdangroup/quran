type AudioPlay = {
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
};
export type AyatType = {
  nomorAyat: string;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: AudioPlay;
}[];
export type IsiSurahType = {
  nomor: string;
  nama: string;
  namaLatin: string;
  jumlahAyat: string;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioPlay;
};

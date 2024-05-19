import React, { Dispatch, SetStateAction } from "react";
import { AyatType, IsiSurahType } from "../../types";
import Skeleton from "./Skeleton";

type ListAyatType = {
  surah: IsiSurahType | null;
  loading: boolean;
  setQari: Dispatch<SetStateAction<string>>;
  ayatSurah: AyatType[] | null;
  qari: string;
};

const ListAyat = ({
  surah,
  loading,
  setQari,
  ayatSurah,
  qari,
}: ListAyatType) => {
  return (
    <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-y-auto">
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-transparent z-10">
        {/* <p className="text-center py-2 text-lg text-white">
            {surah?.namaLatin}
          </p> */}
        <audio
          controls
          className="m-6 border p-1 bg-blue-400 border-blue-400 mx-auto rounded-full w-[200px]"
          src={`${surah?.audioFull[qari]}`}
        ></audio>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <audio
            controls
            className="hidden lg:flex w-full mr-4"
            src={`${surah?.audioFull[qari]}`}
          ></audio>
          <select
            className="bg-gray-200 text-white dark:bg-gray-700 text-sm px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setQari(e.target.value)}
          >
            <option value="01">Abdullah-Al-Juhany</option>
            <option value="02">Abdul-Muhsin-Al-Qasim</option>
            <option value="03">Abdurrahman-as-Sudais</option>
            <option value="04">Ibrahim-Al-Dossari</option>
            <option value="05">Misyari-Rasyid-Al-Afasi</option>
          </select>
        </div>
        {loading ? (
          <>
            <Skeleton height="h-[85px]" />
            <Skeleton height="h-[85px]" />
            <Skeleton height="h-[85px]" />
          </>
        ) : (
          ayatSurah?.map((ayat) => (
            <div
              key={ayat.number}
              className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md my-2"
            >
              <h5 className="text-2xl text-right mb-2 text-gray-800 dark:text-gray-200">
                {ayat.teksArab}
              </h5>
              <p className="text-yellow-500 mb-2">{ayat.teksLatin}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {ayat.teksIndonesia}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListAyat;

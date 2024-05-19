import React, { Dispatch, SetStateAction } from "react";
import { IsiSurahType } from "../../types";

type SearchSurahType = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  filterManufacturs: IsiSurahType[] | null;
  setNoSurah: Dispatch<SetStateAction<string>>;
};

const SearchSurah = ({
  name,
  setName,
  setSearch,
  filterManufacturs,
  setNoSurah,
}: SearchSurahType) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full flex justify-center">
        <input
          type="text"
          className="w-1/2 p-2 mb-6 border rounded"
          placeholder="Cari surah..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterManufacturs?.map((surah) => (
            <div
              key={surah.nomor}
              className="p-4 border rounded cursor-pointer bg-gray-100"
              onClick={() => {
                setNoSurah(surah.nomor);
                setName(surah.namaLatin);
                setSearch("");
              }}
            >
              <h2 className="text-xl font-semibold">{surah.namaLatin}</h2>
              <p className="text-gray-600">{surah.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="w-full lg:w-1/3 my-4 mx-auto flex flex-col relative">

    //   <input
    //     type="text"
    //     className="p-3 rounded-lg mb-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //     placeholder="Cari Surah"
    //     value={name}
    //     onChange={(e) => {
    //       setName(e.target.value);
    //       setSearch(e.target.value);
    //     }}
    //   />
    //   <div className="absolute w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-scroll z-10">
    //     {filterManufacturs?.map((surah) => (
    //       <div
    //         key={surah.nomor}
    //         onClick={() => {
    //           setNoSurah(surah.nomor);
    //           setName(surah.namaLatin);
    //           setSearch("");
    //         }}
    //         className="cursor-pointer p-3 hover:bg-blue-500 hover:text-white transition duration-200"
    //       >
    //         {surah.namaLatin}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default SearchSurah;

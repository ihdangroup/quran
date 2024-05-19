import React, { Dispatch, SetStateAction } from "react";
import { IsiSurahType } from "../../types";
import Skeleton from "./Skeleton";

type ListSurahType = {
  loading: boolean;
  semuaSurah: IsiSurahType[] | null;
  setNoSurah: Dispatch<SetStateAction<string>>;
};

const ListSurah = ({ loading, semuaSurah, setNoSurah }: ListSurahType) => {
  return (
    <div className="w-full mr-6 lg:w-1/4 bg-white dark:bg-gray-800 p-4 lg:p-0 rounded-lg shadow-md overflow-y-auto">
      {loading ? (
        <>
          <Skeleton height="h-[70px]" />
          <Skeleton height="h-[70px]" />
          <Skeleton height="h-[70px]" />
          <Skeleton height="h-[70px]" />
          <Skeleton height="h-[70px]" />
        </>
      ) : (
        semuaSurah?.map((srh) => (
          <div
            key={srh.nomor}
            className="flex items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg my-2 shadow hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300 cursor-pointer"
            onClick={() => setNoSurah(srh.nomor)}
          >
            <span className="flex items-center justify-center p-2 rounded-full bg-yellow-500 text-white w-10 h-10 mr-4">
              {srh.nomor}
            </span>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {srh.namaLatin}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {srh.arti}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListSurah;

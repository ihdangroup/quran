import ListAyat from "@/components/ListAyat";
import ListSurah from "@/components/ListSurah";
import SearchSurah from "@/components/Search";
import Skeleton from "@/components/Skeleton";
import React from "react";
import { AyatType, IsiSurahType } from "../../types";

const Surah = () => {
  const [semuaSurah, setSemuaSurah] = React.useState<IsiSurahType[] | null>(
    null
  );
  const [surah, setSurah] = React.useState<IsiSurahType | null>(null);
  const [noSurah, setNoSurah] = React.useState<string>("1");
  const [ayatSurah, setAyatSurah] = React.useState<AyatType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [name, setName] = React.useState<string>("");
  const [qari, setQari] = React.useState<string>("01");
  const [search, setSearch] = React.useState<string>("");

  const filterManufacturs = search
    ? semuaSurah?.filter((item) =>
        item.namaLatin
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(search.toLowerCase().replace(/\s+/g, ""))
      )
    : null;

  async function getSemuaSurah() {
    const dataFetch = await fetch("https://equran.id/api/v2/surat");
    const dataSurah = await dataFetch.json();
    setLoading(false);
    setSemuaSurah(dataSurah.data);
  }

  async function getSurah() {
    const handleSurah = await fetch(
      `https://equran.id/api/v2/surat/${noSurah}`
    );
    const { data } = await handleSurah.json();
    setSurah(data);
    setLoading(false);
    setAyatSurah(data.ayat);
  }

  React.useEffect(() => {
    getSemuaSurah();
    getSurah();
  }, [noSurah]);

  return (
    <div className="p-4 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h3 className="text-xl font-bold text-center text-gray-800 dark:text-gray-200 my-6">
        Bacalah Al-Qur&apos;an dengan Tartil
      </h3>
      <SearchSurah
        name={name}
        setName={setName}
        setSearch={setSearch}
        filterManufacturs={filterManufacturs}
        setNoSurah={setNoSurah}
      />
      <div className="flex justify-center mt-8">
        {/* <ListSurah
          semuaSurah={semuaSurah}
          loading={loading}
          setNoSurah={setNoSurah}
        /> */}
        <ListAyat
          surah={surah}
          loading={loading}
          setQari={setQari}
          ayatSurah={ayatSurah}
          qari={qari}
        />
      </div>
    </div>
  );
};

export default Surah;

import React, { useEffect, useState } from "react";
// Components
import CryptoSearchBar from "./CryptoSearchBar";
import CryptoCard from "./CryptoCard";
// Types
import { CryptoCoinsData, CryptoListsProps } from "../../../types";

function CryptoLists({ data, isFetching, isHomePage }: CryptoListsProps) {
  const [coinList, setCoinList] = useState(data);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filterCoins = data?.filter((coin: CryptoCoinsData) => {
        return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCoinList(filterCoins);
    } else {
      setCoinList(data);
    }
  }, [searchTerm, data]);

  // For Testing Purpose Local Data
  // useEffect(() => {
  //   fetch("/cryptoCoinsData.json")
  //     .then((res) => res.json())
  //     .then((data) => setCoinList(data.data.coins));
  // }, []);

  return (
    <>
      <CryptoSearchBar
        isFetching={isFetching}
        hideSearch={isHomePage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CryptoCard coinList={coinList} isFetching={isFetching} isHomePage={isHomePage} />
    </>
  );
}

export default CryptoLists;

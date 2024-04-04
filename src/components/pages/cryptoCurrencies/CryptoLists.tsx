import React, { useEffect, useState } from "react";
// Components
import CryptoSearchBar from "./CryptoSearchBar";
import CryptoCard from "./CryptoCard";
// Types
import { CryptoCoinData, CryptoListsProps } from "../../../types";

function CryptoLists({ data, isFetching, hideSearch }: CryptoListsProps) {
  const [coinList, setCoinList] = useState(data);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filterCoins = data?.filter((coin: CryptoCoinData) => {
        return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCoinList(filterCoins);
    } else {
      setCoinList(data);
    }
  }, [searchTerm, data]);

  return (
    <>
      <CryptoSearchBar
        isFetching={isFetching}
        hideSearch={hideSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <CryptoCard coinList={coinList} isFetching={isFetching} />
    </>
  );
}

export default CryptoLists;

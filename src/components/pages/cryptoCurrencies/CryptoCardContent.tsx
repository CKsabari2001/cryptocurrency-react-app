// Mui
import { Typography } from "@mui/material";
// Millify
import millify from "millify";
// Types
import { CryptoCoinsData } from "../../../types";

function CryptoCardContent({ coin }: { coin: CryptoCoinsData }) {
  const cardBodyData = [
    {
      name: "Price",
      value: coin.price,
    },
    {
      name: "Market Cap",
      value: coin.marketCap,
    },
    {
      name: "Daily Change",
      value: coin.change,
    },
  ];

  return (
    <>
      <div className="card-header">
        <Typography variant="h6" component="h6">
          {coin.rank}. {coin.name}
        </Typography>

        <img src={coin.iconUrl} alt="" className="card-header-img" />
      </div>
      <div className="card-body">
        {cardBodyData.map((obj, i) => (
          <Typography key={i} variant={"body1"} component="p">
            {obj.name}: <span>{millify(obj.value)}</span>
          </Typography>
        ))}
      </div>
    </>
  );
}

export default CryptoCardContent;

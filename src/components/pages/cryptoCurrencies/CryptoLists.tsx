import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardContent,
  TextField,
  Box,
} from "@mui/material";

import millify from "millify";

// Types
interface Coin {
  uuid: string;
  name: string;
  rank: number;
  iconUrl: string;
  price: number;
  marketCap: number;
  change: number;
}

interface Props {
  data?: Coin[];
  hideSearch?: boolean;
}

function CryptoLists({ data, hideSearch }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const [coinList, setCoinList] = useState(data);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filterCoins = data?.filter((coin: Coin) => {
        return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setCoinList(filterCoins);
    } else {
      setCoinList(data);
    }
  }, [searchTerm, data]);

  return (
    <React.Fragment>
      {!hideSearch && (
        <Box component="section" className="coin-list-search">
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            sx={{ width: "100%", maxWidth: "400px" }}
          />
        </Box>
      )}

      <Grid container spacing={isMobileScreen ? 5 : 2}>
        {coinList?.map((coin: Coin) => (
          <Grid item key={coin.uuid} xs={6} md={4} lg={3}>
            <Link to={`/coins/${coin.uuid}`}>
              <Card className="crypto-card">
                <CardContent>
                  <div className="card-header">
                    <Typography variant="h6" component="h6">
                      {coin.rank}. {coin.name}
                    </Typography>
                    <img
                      src={coin.iconUrl}
                      alt=""
                      className="card-header-img"
                    />
                  </div>
                  <div className="card-body">
                    <Typography
                      variant={isMobileScreen ? "body1" : "body2"}
                      component="p"
                    >
                      Price: {millify(coin.price)}
                    </Typography>
                    <Typography
                      variant={isMobileScreen ? "body1" : "body2"}
                      component="p"
                    >
                      Market Cap: {millify(coin.marketCap)}
                    </Typography>
                    <Typography
                      variant={isMobileScreen ? "body1" : "body2"}
                      component="p"
                    >
                      Daily Change: {millify(coin.change)}%
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default CryptoLists;

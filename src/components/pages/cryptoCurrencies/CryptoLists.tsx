import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  useMediaQuery,
  Card,
  CardContent,
  Box,
  Skeleton,
} from "@mui/material";

import millify from "millify";

import { StyledSearchBar } from "../../styled/styledComponents";

// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";

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
  isFetcing: boolean;
  hideSearch?: boolean;
}

function CryptoLists({ data, isFetcing, hideSearch }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");
  const md = useMediaQuery("(min-width: 900px)");
  const lg = useMediaQuery("(min-width: 1200px)");

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

  // Const Styled Components
  const cH6 = {
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
  };
  const cP = {
    fontSize: md ? "16px" : "14px",
  };

  return (
    <React.Fragment>
      {!hideSearch && (
        <>
          <Box component="section" className="coin-list-search">
            {isFetcing ? (
              <Skeleton
                variant="rounded"
                sx={{ width: "100%", maxWidth: "400px", height: "50px" }}
              />
            ) : (
              <StyledSearchBar
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                sx={{ width: "100%", maxWidth: "400px" }}
              />
            )}
          </Box>
        </>
      )}

      <Grid
        container
        rowSpacing={md ? 8 : 5}
        columnSpacing={lg ? 10 : md ? 6 : 4}
      >
        {isFetcing ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Card
                  className="crypto-card"
                  variant="outlined"
                  sx={{ margin: "auto", mt: 5 }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <div className="card-header">
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: cH6.fontSize, width: "100px" }}
                      />

                      <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <div className="card-body">
                      <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
                      <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
                      <Skeleton variant="text" sx={{ fontSize: cP.fontSize }} />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </>
        ) : (
          <>
            {coinList?.map((coin: Coin) => (
              <Grid item key={coin.uuid} xs={12} sm={6} md={4} lg={3}>
                <Link to={`/cryptocurrencies/coins/${coin.uuid}`}>
                  <Card
                    className="crypto-card"
                    variant="outlined"
                    sx={{ margin: "auto" }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <div className="card-header">
                        <Typography variant="h6" component="h6" sx={cH6}>
                          {coin.rank}. {coin.name}
                        </Typography>

                        <img
                          src={coin.iconUrl}
                          alt=""
                          className="card-header-img"
                        />
                      </div>
                      <div className="card-body">
                        {[
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
                        ].map((obj, i) => (
                          <Typography
                            key={i}
                            variant={isMobileScreen ? "body1" : "body2"}
                            component="p"
                          >
                            {obj.name}: <span>{millify(obj.value)}</span>
                          </Typography>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default CryptoLists;

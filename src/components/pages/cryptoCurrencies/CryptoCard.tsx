// React Router
import { Link } from "react-router-dom";
// Mui
import { Grid, useMediaQuery, Card, CardContent } from "@mui/material";
// Components
import CryptoCardLoader from "./cryptoCurrenciesLoader/CryptoCardLoader";
import CryptoCardContent from "./CryptoCardContent";
// Types
import { CryptoCoinsData, CryptoCardProps } from "../../../types";
import CardZoomOnHover from "../../motionAnimations/CardZoomOnHover";
import RevealOnView from "../../motionAnimations/RevealOnView";

function CryptoCard({ coinList, isFetching, isHomePage }: CryptoCardProps) {
  const md = useMediaQuery("(min-width: 900px)");
  const lg = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <Grid container rowSpacing={md ? 8 : 5} columnSpacing={lg ? 10 : md ? 6 : 4}>
        {isFetching ? (
          <CryptoCardLoader />
        ) : (
          <>
            {coinList?.map((coin: CryptoCoinsData, i) => (
              <Grid item key={coin.uuid} xs={12} sm={6} md={4} xl={3}>
                <Link to={`/cryptocurrencies/coins/${coin.uuid}`}>
                  <RevealOnView isHomePage={isHomePage} index={i}>
                    <CardZoomOnHover>
                      <Card className="crypto-card" variant="outlined" sx={{ margin: "auto" }}>
                        <CardContent sx={{ p: 3 }}>
                          <CryptoCardContent coin={coin} />
                        </CardContent>
                      </Card>
                    </CardZoomOnHover>
                  </RevealOnView>
                </Link>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
}

export default CryptoCard;

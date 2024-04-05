// Mui
import { Grid, Card, CardContent } from "@mui/material";
// Types
import { CryptoDescriptionData } from "../../../../../types";
// Styles
import { cChartCard, cChartCardContent } from "../../../../styled/CryptoChartLoader";
// Components
import CryptoDescriptionCardWhat from "./CryptoDescriptionCardWhat";
import CryptoDescriptionCardLinks from "./CryptoDescriptionCardLinks";

function CryptoDescriptionCard({ data }: { data: CryptoDescriptionData }) {
  return (
    <Grid item xs={12}>
      <Card className="crypto-card" variant="outlined" sx={cChartCard}>
        <CardContent sx={cChartCardContent}>
          <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={{ xs: 1, md: 3 }}>
            <CryptoDescriptionCardWhat data={data} />
            <CryptoDescriptionCardLinks data={data} />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CryptoDescriptionCard;

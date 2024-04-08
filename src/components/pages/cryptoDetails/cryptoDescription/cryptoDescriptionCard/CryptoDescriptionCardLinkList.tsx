// Mui
import { Box, Grid, Link, Typography } from "@mui/material";
// Types
import { CryptoDescriptionData } from "../../../../../types";
// Styles
import { cLink, cH6 } from "../../../../styled/Typography";
import RevealOnView from "../../../../motionAnimations/RevealOnView";
// Motion Custom Animation
function CryptoDescriptionCardLinkList({ data }: { data: CryptoDescriptionData }) {
  const links = data.links;

  return (
    <>
      {links.map((link, i) => (
        <Grid key={i} item xs={12} sm={6} lg={5}>
          <RevealOnView index={i} isHomePage={true}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant={"body1"} component="h6" gutterBottom sx={cH6}>
                {link.type}
              </Typography>
              <Link href={link.url} target="_blank" sx={cLink}>
                {link.name}
              </Link>
            </Box>
          </RevealOnView>
        </Grid>
      ))}
    </>
  );
}

export default CryptoDescriptionCardLinkList;

// MUI
import { Grid, Typography, useMediaQuery } from "@mui/material";
import HTMLReactParser from "html-react-parser/lib/index";

interface Props {
  data: {
    name: string;
    description: string;
    links: Links[];
  };
}
interface Links {
  name: string;
  url: string;
  type: string;
}

function CryptoDescription({ data }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");

  const links = data.links;

  return (
    <Grid container>
      <Grid item xs={12} sx={{ marginTop: 14 }}>
        <Typography
          variant={isMobileScreen ? "h4" : "h5"}
          component="h2"
          gutterBottom
        >
          What is {data.name}
        </Typography>
        <Typography variant={isMobileScreen ? "body1" : "body2"} component="h6">
          {HTMLReactParser(data.description)}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: 7 }}>
        <Typography
          variant={isMobileScreen ? "h4" : "h5"}
          component="h2"
          gutterBottom
        >
          {data.name} Links
        </Typography>
        <div className="stats">
          <ul>
            {links.map((link) => (
              <li key={link.url}>
                <Typography
                  variant={isMobileScreen ? "body1" : "body2"}
                  component="h6"
                >
                  {link.type}
                </Typography>

                <a href={link.url} target="_blank">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}

export default CryptoDescription;

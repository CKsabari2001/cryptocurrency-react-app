// MUI
import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import HTMLReactParser from "html-react-parser/lib/index";

// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";

interface Props {
  data: {
    name: string;
    description: string;
    links: Links[];
  };
  isFetching: boolean;
}
interface Links {
  name: string;
  url: string;
  type: string;
}

function CryptoDescription({ data, isFetching }: Props) {
  const isMobileScreen = useMediaQuery("(min-width: 900px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  const md = useMediaQuery("(min-width: 900px)");

  // Const Styled Components

  const cH1 = {
    fontFamily: " 'Roboto', sans-serif",
    fontSize: md ? "38px" : "28px",
    fontWeight: 700,
    color: variables.textColorPrimary,
  };
  const cH2 = {
    fontFamily: " 'Roboto', sans-serif",
    fontSize: md ? "34px" : "24px",
    fontWeight: 700,
    color: variables.textColorPrimary,
  };
  const cH6 = {
    fontFamily: "'Lato', sans-serif",
    fontSize: md ? "18px" : "16px",
    fontWeight: 500,
    color: variables.textColorTertiary,
    marginBottom: "0",
  };

  if (isFetching) {
    return (
      <>
        <Grid
          container
          justifyContent={"space-between"}
          rowSpacing={5}
          columnSpacing={lg ? 0 : md ? 4 : 0}
          sx={{
            pt: md ? "100px" : "50px",
          }}
        >
          <Grid
            item
            xs={12}
            justifyContent={"center"}
            sx={{ textAlign: "center", mb: md ? 3 : 1 }}
          >
            <div
              style={{
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: cH1.fontSize }} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Card
              className="crypto-card"
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <CardContent
                sx={{
                  padding: md ? "50px !important" : "30px!important",
                }}
              >
                <Grid
                  container
                  rowSpacing={{ xs: 3, md: 5 }}
                  columnSpacing={{ xs: 1, md: 3 }}
                >
                  <Grid item xs={12}>
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: cH2.fontSize,
                        width: "100%",
                        maxWidth: "200px",
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: cH6.fontSize,
                        width: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={10} xl={8}>
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: cH2.fontSize,
                        width: "100%",
                        maxWidth: "200px",
                      }}
                    />
                    <Grid
                      container
                      justifyContent={"space-between"}
                      rowSpacing={{ xs: 3, md: 5 }}
                      columnSpacing={{ xs: 3, sm: 5, md: 10, lg: 0 }}
                    >
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Grid
                          key={i}
                          item
                          xs={12}
                          sm={6}
                          lg={5}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Skeleton
                            variant="text"
                            sx={{
                              fontSize: cH6.fontSize,
                              width: "100%",
                              maxWidth: "100px",
                            }}
                          />
                          <Skeleton
                            variant="text"
                            sx={{
                              fontSize: cH6.fontSize,
                              width: "100%",
                              maxWidth: "100px",
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }

  const links = data.links;

  return (
    <Grid
      container
      justifyContent={"space-between"}
      rowSpacing={5}
      columnSpacing={lg ? 0 : md ? 4 : 0}
      sx={{
        pt: md ? "100px" : "50px",
      }}
    >
      <Grid
        item
        xs={12}
        justifyContent={"center"}
        sx={{ textAlign: "center", mb: md ? 3 : 1 }}
      >
        <Typography variant="h2" component="h2" gutterBottom sx={cH1}>
          About {data.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card
          className="crypto-card"
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <CardContent
            sx={{
              padding: md ? "50px !important" : "30px!important",
            }}
          >
            <Grid
              container
              rowSpacing={{ xs: 3, md: 5 }}
              columnSpacing={{ xs: 1, md: 3 }}
            >
              <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom sx={cH2}>
                  What is {data.name}
                </Typography>
                <Typography variant="body1" component="h6" sx={cH6}>
                  {HTMLReactParser(data.description)}
                </Typography>
              </Grid>
              <Grid item xs={12} lg={10} xl={8}>
                <Typography variant="h4" component="h2" gutterBottom sx={cH2}>
                  {data.name} Links
                </Typography>
                <Grid
                  container
                  justifyContent={"space-between"}
                  rowSpacing={{ xs: 3, md: 5 }}
                  columnSpacing={{ xs: 3, sm: 5, md: 10, lg: 0 }}
                >
                  {links.map((link, i) => (
                    <Grid
                      key={i}
                      item
                      xs={12}
                      sm={6}
                      lg={5}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant={isMobileScreen ? "body1" : "body2"}
                        component="h6"
                        gutterBottom
                        sx={cH6}
                      >
                        {link.type}
                      </Typography>

                      <a
                        href={link.url}
                        target="_blank"
                        style={{
                          ...cH6,
                          color: variables.bgColorPrimary,
                          fontWeight: 700,
                        }}
                        onMouseOver={(e) => {
                          e.preventDefault();
                          e.currentTarget.style.color =
                            variables.bgColorPrimaryFaded;
                        }}
                        onMouseOut={(e) => {
                          e.preventDefault();
                          e.currentTarget.style.color =
                            variables.bgColorPrimary;
                        }}
                      >
                        {link.name}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CryptoDescription;

// Mui
import { Skeleton } from "@mui/material";
// Styles
import { cH6, cH1 } from "../../../../styled/Typography";

function CryptoTitleLoader() {
  return (
    <>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}>
        <Skeleton variant="text" sx={{ fontSize: cH1 }} />
        <Skeleton variant="text" sx={{ fontSize: cH6 }} />
      </div>
    </>
  );
}

export default CryptoTitleLoader;

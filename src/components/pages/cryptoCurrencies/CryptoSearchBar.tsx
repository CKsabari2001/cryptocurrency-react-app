// Mui
import { Box, Skeleton } from "@mui/material";
// Styled Components
import { StyledSearchBar } from "../../styled/styledComponents";
// Types
import { CryptoSearchBarProps } from "../../../types";

function CryptoSearchBar({ isFetching, hideSearch, searchTerm, setSearchTerm }: CryptoSearchBarProps) {
  return (
    <>
      {!hideSearch && (
        <>
          <Box component="section" className="coin-list-search">
            {isFetching ? (
              <Skeleton variant="rounded" sx={{ width: "100%", maxWidth: "400px", height: "50px" }} />
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
    </>
  );
}

export default CryptoSearchBar;

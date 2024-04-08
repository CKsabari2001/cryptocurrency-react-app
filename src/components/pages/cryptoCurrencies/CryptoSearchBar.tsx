// Mui
import { Box, Skeleton } from "@mui/material";
// Styled Components
import { StyledSearchBar } from "../../styled/styledComponents";
// Types
import { CryptoSearchBarProps } from "../../../types";
// Motion Animation Components
import RevealOnViewTop from "../../motionAnimations/RevealOnViewTop";

function CryptoSearchBar({ isFetching, hideSearch, searchTerm, setSearchTerm }: CryptoSearchBarProps) {
  if (hideSearch) {
    return;
  }

  if (isFetching) {
    return (
      <Box component="section" className="coin-list-search">
        <Skeleton variant="rounded" sx={{ width: "100%", maxWidth: "400px", height: "50px" }} />
      </Box>
    );
  }

  return (
    <RevealOnViewTop>
      <Box component="section" className="coin-list-search">
        <StyledSearchBar
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          sx={{ width: "100%", maxWidth: "400px" }}
        />
      </Box>
    </RevealOnViewTop>
  );
}

export default CryptoSearchBar;

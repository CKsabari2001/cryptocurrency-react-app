// Mui
import { Box, InputLabel, FormControl } from "@mui/material";
// Types
import { SelectChangeEvent } from "@mui/material/Select";
// Redux
import { useAppDispatch, useAppSelector } from "../../../../app/store/hooks.ts";
import { setNewsSelectValue } from "../../../../app/store/features/newsSelect.ts";
// Components
import NewsListSelectMenu from "./NewsListSelectMenu.tsx";
import NewsListSelectLoader from "../newsLoader/NewsListSelectLoader.tsx";
// Styles
import { inputLabel } from "../../../styled/newsListSelect.ts";
// Motion Animation Components
import RevealOnViewTop from "../../../motionAnimations/RevealOnViewTop.tsx";

function NewsListSelect({ isFetching }: { isFetching: boolean }) {
  const dispatch = useAppDispatch();

  const cryptoName = useAppSelector((state) => state.newsSelect.value);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setNewsSelectValue(event.target.value as string));
  };

  if (isFetching) {
    return <NewsListSelectLoader />;
  }

  return (
    <>
      <RevealOnViewTop>
        <Box className="news-select-box">
          <FormControl sx={{ width: "100%", maxWidth: "400px" }}>
            <InputLabel id="demo-simple-select-label" sx={inputLabel}>
              Select The Source
            </InputLabel>
            <NewsListSelectMenu cryptoName={cryptoName} handleChange={handleChange} />
          </FormControl>
        </Box>
      </RevealOnViewTop>
    </>
  );
}

export default NewsListSelect;

// Mui
import { Box, InputLabel, FormControl } from "@mui/material";
// Types
import Select, { SelectChangeEvent } from "@mui/material/Select";
// Redux
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.ts";
import { setNewsSelectValue } from "../../../app/store/features/newsSelect.ts";
// Components
import NewsListSelectMenu from "./NewsListSelectMenu.tsx";
import NewsListSelectLoader from "./NewsListSelectLoader.tsx";
// Styles
import { inputLabel, select } from "../../styled/newsListSelect.ts";

function NewsListSelect({ isFetching }: { isFetching: boolean }) {
  const dispatch = useAppDispatch();

  const cryptoName = useAppSelector((state) => state.newsSelect.value);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setNewsSelectValue(event.target.value as string));
  };

  if (isFetching) {
    return <NewsListSelectLoader />;
  }

  const selectMenuProps = {
    PaperProps: {
      style: {
        maxHeight: "400px",
      },
    },
  };

  return (
    <>
      <Box className="news-select-box">
        <FormControl sx={{ width: "100%", maxWidth: "400px" }}>
          <InputLabel id="demo-simple-select-label" sx={inputLabel}>
            Select The Source
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cryptoName}
            label="Select The Source"
            onChange={handleChange}
            MenuProps={selectMenuProps}
            sx={select}>
            <NewsListSelectMenu />
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default NewsListSelect;

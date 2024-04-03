import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Redux
// import { useGetCryptosQuery } from "../../../app/store/services/cryptoApi.ts";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.ts";
import { setNewsSelectValue } from "../../../app/store/features/newsSelect.ts";

// Scss Variables
import variables from "../../../assets/scss/_Variables.module.scss";
import { Skeleton } from "@mui/material";

function NewsListSelect({ isFetching }: { isFetching: boolean }) {
  const dispatch = useAppDispatch();
  const cryptoName = useAppSelector((state) => state.newsSelect.value);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setNewsSelectValue(event.target.value as string));
  };

  const selectBoxArr = [
    { value: "/coindesk", name: "CoinDesk" },
    { value: "/cointelegraph", name: "Cointelegraph" },
    { value: "/bitcoinist", name: "Bitcoinist" },
    { value: "/decrypt", name: "Decrypt" },
    { value: "/bsc", name: "BSC News" },
    { value: "/theguardian", name: "The Guardian" },
  ];

  if (isFetching) {
    return (
      <>
        <Box className="news-select-box">
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"50px"}
            sx={{
              maxWidth: "400px",
            }}
          />
        </Box>
      </>
    );
  }

  return (
    <>
      <Box className="news-select-box">
        <FormControl sx={{ width: "100%", maxWidth: "400px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: `${variables.bgColorPrimary} !important`,
              fontSize: "14px",
            }}
          >
            Select The Source
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cryptoName}
            label="Select The Source"
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: "400px",
                },
              },
            }}
            sx={{
              fieldset: {
                borderColor: `${variables.bgColorPrimary} !important`,
                borderRadius: "15px!important",
              },
            }}
          >
            {selectBoxArr?.map((obj, i) => (
              <MenuItem value={obj.value} key={i}>
                {obj.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default NewsListSelect;

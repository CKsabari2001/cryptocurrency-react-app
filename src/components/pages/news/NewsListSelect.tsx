import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// Redux
import { useGetCryptosQuery } from "../../../app/store/services/cryptoApi.ts";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks.ts";
import { setNewsSelectValue } from "../../../app/store/features/newsSelect.ts";

interface Coin {
  uuid: string;
  name: string;
}

function NewsListSelect() {
  const dispatch = useAppDispatch();
  const cryptoName = useAppSelector((state) => state.newsSelect.value);

  const { data: cryptoData, isFetching: cryptoDataIsFetching } =
    useGetCryptosQuery({});
  const cryptos = cryptoData?.data?.coins;

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setNewsSelectValue(event.target.value as string));
  };

  return (
    <>
      {!cryptoDataIsFetching && (
        <Box className="news-select-box">
          <FormControl sx={{ width: "100%", maxWidth: "400px" }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cryptoName}
              label="Select"
              onChange={handleChange}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: "400px",
                  },
                },
              }}
            >
              {cryptos?.map((coin: Coin) => (
                <MenuItem value={coin.name} key={coin.uuid}>
                  {coin.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </>
  );
}

export default NewsListSelect;

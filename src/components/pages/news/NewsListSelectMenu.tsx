// Mui
import { MenuItem } from "@mui/material";
// Styles
import { select } from "../../styled/newsListSelect";
// Types
import Select from "@mui/material/Select";
import { ChartSelectBoxMenuProps } from "../../../types";
function NewsListSelectMenu({ cryptoName, handleChange }: ChartSelectBoxMenuProps) {
  const selectBoxArr = [
    { value: "/coindesk", name: "CoinDesk" },
    { value: "/cointelegraph", name: "Cointelegraph" },
    { value: "/bitcoinist", name: "Bitcoinist" },
    { value: "/decrypt", name: "Decrypt" },
    { value: "/bsc", name: "BSC News" },
    { value: "/theguardian", name: "The Guardian" },
  ];

  const selectMenuProps = {
    PaperProps: {
      style: {
        maxHeight: "400px",
      },
    },
  };

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={cryptoName}
        label="Select The Source"
        onChange={handleChange}
        MenuProps={selectMenuProps}
        sx={select}>
        {selectBoxArr?.map((obj, i) => (
          <MenuItem value={obj.value} key={i}>
            {obj.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export default NewsListSelectMenu;

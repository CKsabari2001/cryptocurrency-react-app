import { MenuItem } from "@mui/material";

function NewsListSelectMenu() {
  const selectBoxArr = [
    { value: "/coindesk", name: "CoinDesk" },
    { value: "/cointelegraph", name: "Cointelegraph" },
    { value: "/bitcoinist", name: "Bitcoinist" },
    { value: "/decrypt", name: "Decrypt" },
    { value: "/bsc", name: "BSC News" },
    { value: "/theguardian", name: "The Guardian" },
  ];

  return (
    <>
      {selectBoxArr?.map((obj, i) => (
        <MenuItem value={obj.value} key={i}>
          {obj.name}
        </MenuItem>
      ))}
    </>
  );
}

export default NewsListSelectMenu;

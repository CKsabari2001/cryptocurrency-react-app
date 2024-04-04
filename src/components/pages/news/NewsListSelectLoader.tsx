import { Box, Skeleton } from "@mui/material";
function NewsListSelectLoader() {
  return (
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
  );
}

export default NewsListSelectLoader;

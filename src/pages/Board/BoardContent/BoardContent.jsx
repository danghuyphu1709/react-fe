import Box from "@mui/material/Box";

function BoardContent() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "yellow",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.custom.appBarHeigth} - ${theme.custom.boarBarHeigth})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board content
      </Box>
    </>
  );
}

export default BoardContent;

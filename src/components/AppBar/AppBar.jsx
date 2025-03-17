import Box from "@mui/material/Box";

function AppBar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) => theme.custom.appBarHeigth,
          display: "flex",
          alignItems: "center",
        }}
      >
        App bar
      </Box>
    </>
  );
}

export default AppBar;

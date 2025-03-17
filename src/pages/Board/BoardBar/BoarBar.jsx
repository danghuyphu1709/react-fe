import Box from "@mui/material/Box";

function BoarBar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "green",
          width: "100%",
          height: (theme) => theme.custom.boarBarHeigth,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board bar
      </Box>
    </>
  );
}

export default BoarBar;

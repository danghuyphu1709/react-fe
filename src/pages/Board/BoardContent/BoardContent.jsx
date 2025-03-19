import Box from "@mui/material/Box";
import * as React from "react";
import ListCollumns from "./ListCollumns/ListCollumns";

function BoardContent() {
  
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.custom.BoardContentHeigth,
          display: "flex",
          p:'10px 0'
        }}
      >
        <ListCollumns/>
      </Box>
    </>
  );
}

export default BoardContent;

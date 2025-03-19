import Box from "@mui/material/Box";
import * as React from "react";
import ListCollumns from "./ListCollumns/ListCollumns";
import { mapOrder } from "~/utils/sorts"
function BoardContent({ board }) {

  const orderdColumns = mapOrder(board?.columns,board?.columnOrderIds,'_id');

  console.log(orderdColumns)
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.custom.BoardContentHeigth,
          display: "flex",
          p: "10px 0",
        }}
      >
        <ListCollumns collumns={orderdColumns} />
      </Box>
    </>
  );
}

export default BoardContent;

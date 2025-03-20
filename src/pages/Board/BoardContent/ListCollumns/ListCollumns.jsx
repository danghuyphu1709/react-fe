import * as React from "react";
import Box from "@mui/material/Box";
import Collumns from "./Collumns/Collumns";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCollumns({ collumns }) {
  return (
    <SortableContext items={collumns.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": { m: 2 },
        }}
      >
        {collumns?.map((collumn) => {
          return <Collumns key={collumn._id} collumn={collumn} />;
        })}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            borderRadius: "6px",
            height: "fit-content",
            bgcolor: "#ffffff3d",
          }}
        >
          <Button
            sx={{ color: "primary.ligth", width: "100%" }}
            startIcon={<NoteAddIcon />}
          >
            Add new collumn
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListCollumns;

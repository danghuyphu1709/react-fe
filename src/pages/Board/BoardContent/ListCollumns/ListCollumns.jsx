import * as React from "react";
import Box from "@mui/material/Box";
import Collumns from "./Collumns/Collumns";
import { Button } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

function ListCollumns({ collumns }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false);
  const toggleOpenNewColumnForm = () =>
    setOpenNewColumnForm(!openNewColumnForm);
  return (
    <SortableContext
      items={collumns.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
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
        {!openNewColumnForm ? (
          <Box
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
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
        ) : (
          <Box
            sx={{
              inWidth: "250px",
              maxWidth: "250px",
              mx: 2,
              p:1,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
              display: 'flex',
              flexDirection:'column',
              gap:'1'
            }}
          >
            Form tạo mới columns
          </Box>
        )}
      </Box>
    </SortableContext>
  );
}

export default ListCollumns;

import * as React from "react";
import Box from "@mui/material/Box";
import CardItem from "./Card/CardItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCards({ cards }) {
  return (
    <SortableContext
      items={cards.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) =>
            `calc(${theme.custom.BoardContentHeigth} - ${theme.spacing(5)} - ${
              theme.custom.CollumnHeaderHeigth
            } - ${theme.custom.CollumnFooterHeigth})`,

          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#EEEEEE",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#888888",
            borderRadius: "5px",
          },
        }}
      >
        {cards?.map((card) => {
          return <CardItem key={card._id} card={card} />;
        })}
      </Box>
    </SortableContext>
  );
}

export default ListCards;

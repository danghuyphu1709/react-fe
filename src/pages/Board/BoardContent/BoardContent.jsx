import Box from "@mui/material/Box";
import * as React from "react";
import ListCollumns from "./ListCollumns/ListCollumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMNS: "ACTIVE_DRAG_ITEM_TYPE_COLUMNS",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const mySensors = useSensors(pointerSensor);

  const [orderedColumn, setOrderedColumnState] = useState([]);
  useEffect(() => {
    setOrderedColumnState(
      mapOrder(board?.columns, board?.columnOrderIds, "_id")
    );
  }, [board]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);

  const [activeDragItemType, setActiveDragItemType] = useState(null);

  const [activeDragItemData, setActiveDragItemData] = useState(null);

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMNS
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = orderedColumn.findIndex((c) => c._id === active.id);

      const newIndex = orderedColumn.findIndex((c) => c._id === over.id);

      const dndOrderedColumns = arrayMove(orderedColumn, oldIndex, newIndex);

      setOrderedColumnState(dndOrderedColumns);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={mySensors}
      onDragStart={handleDragStart}
    >
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.custom.BoardContentHeigth,
          display: "flex",
          p: "10px 0",
        }}
      >
        <ListCollumns collumns={orderedColumn} />
        <DragOverlay>
          {(!activeDragItemId || !activeDragItemType) && null}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;

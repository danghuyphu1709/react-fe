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
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core";
import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import Collumns from "./ListCollumns/Collumns/Collumns";
import CardItem from "./ListCollumns/Collumns/ListCards/Card/CardItem";
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMNS: "ACTIVE_DRAG_ITEM_TYPE_COLUMNS",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};
import { cloneDeep, isEmpty } from "lodash";
import { generatePlaceholderCard } from "~/utils/formatter";

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

  const findColumnByCardId = (cardId) => {
    return orderedColumn.find(
      (column) => column.cards.some((card) => card._id === cardId) // Kiểm tra nếu có card với ID trùng khớp
    );
  };

  const [activeDragItemId, setActiveDragItemId] = useState(null);

  const [activeDragItemType, setActiveDragItemType] = useState(null);

  const [activeDragItemData, setActiveDragItemData] = useState(null);

  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    useState(null);

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMNS
    );
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id));
    }

    setActiveDragItemData(event?.active?.data?.current);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData },
      } = active;

      const { id: overDraggingCardId } = over;

      const activeColumn = findColumnByCardId(activeDraggingCardId);
      const overColumn = findColumnByCardId(overDraggingCardId);
      if (!activeColumn || !overColumn) return;

      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        setOrderedColumnState((prevColumn) => {
          const overCardIndex = overColumn?.cards?.findIndex(
            (card) => card._id === overDraggingCardId
          );

          let newCardIndex;

          const isBelowOverItem =
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height;

          const modifier = isBelowOverItem ? 1 : 0;

          newCardIndex =
            overCardIndex >= 0
              ? overCardIndex + modifier
              : overColumn?.cards?.length + 1;

          const nextColumn = cloneDeep(prevColumn);
          const nextActiveColumn = nextColumn.find(
            (column) => column._id === activeColumn._id
          );
          const nextOverColumn = nextColumn.find(
            (column) => column._id === overColumn._id
          );

          if (nextActiveColumn) {
            nextActiveColumn.cards = nextActiveColumn.cards.filter(
              (card) => card._id !== activeDraggingCardId
            );

            if (isEmpty(nextActiveColumn.cards)) {
              nextActiveColumn.cards = [
                generatePlaceholderCard(nextActiveColumn),
              ];
            }

            // cap nhat lai mang
            nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
              (card) => card._id
            );
          }

          if (nextOverColumn) {
            nextOverColumn.cards = nextOverColumn.cards.filter(
              (card) => card._id !== activeDraggingCardId
            );

            const rebuild_draggingCardData = {
              ...activeDragItemData,
              columnId: nextOverColumn._id,
            };

            nextOverColumn.cards = nextOverColumn.cards.toSpliced(
              newCardIndex,
              0,
              rebuild_draggingCardData
            );

            nextOverColumn.cards = nextOverColumn.cards.filter(card => !card.FE_PlaceholderCard);

            nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
              (card) => card._id
            );
          }
          return nextColumn;
        });
      } else {
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(
          (c) => c._id === activeDragItemId
        );

        const newCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(
          (c) => c._id === overDraggingCardId
        );

        const dndOrderedCards = arrayMove(
          oldColumnWhenDraggingCard?.cards,
          oldCardIndex,
          newCardIndex
        );

        setOrderedColumnState((prevColumn) => {
          const nextColumn = cloneDeep(prevColumn);
          const targetColumn = nextColumn.find(
            (column) => column._id === overColumn._id
          );

          targetColumn.cards = dndOrderedCards;

          targetColumn.cardOrderIds = dndOrderedCards.map((card) => card._id);
          return nextColumn;
        });
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMNS) {
      if (active.id !== over.id) {
        const oldColumnIndex = orderedColumn.findIndex(
          (c) => c._id === active.id
        );

        const newColumnIndex = orderedColumn.findIndex(
          (c) => c._id === over.id
        );

        const dndOrderedColumns = arrayMove(
          orderedColumn,
          oldColumnIndex,
          newColumnIndex
        );

        setOrderedColumnState(dndOrderedColumns);
      }
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDraggingCard(null);
  };

  const handleDragOver = (event) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMNS) return;

    const { active, over } = event;

    if (!active || !over) return;

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;

    const { id: overDraggingCardId } = over;

    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overDraggingCardId);
    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      setOrderedColumnState((prevColumn) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overDraggingCardId
        );

        let newCardIndex;

        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1;

        const nextColumn = cloneDeep(prevColumn);
        const nextActiveColumn = nextColumn.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumn.find(
          (column) => column._id === overColumn._id
        );

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          if (isEmpty(nextActiveColumn.cards)) {
            nextActiveColumn.cards = [
              generatePlaceholderCard(nextActiveColumn),
            ];
          }

          // cap nhat lai mang
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          const rebuild_draggingCardData = {
            ...activeDragItemData,
            columnId: nextOverColumn._id,
          };
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            rebuild_draggingCardData
          );
          
          nextOverColumn.cards = nextOverColumn.cards.filter(card => !card.FE_PlaceholderCard);

          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }
        
        console.log("🚀 ~ setOrderedColumnState ~ nextColumn:", nextColumn)
        return nextColumn;
      });
    }
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={mySensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      collisionDetection={closestCorners}
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
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}

          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMNS && (
            <Collumns collumn={activeDragItemData} />
          )}

          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <CardItem card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;

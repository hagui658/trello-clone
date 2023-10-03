import React, { useRef } from "react";
import { CardContainer } from "./styles";
import { useDrop } from "react-dnd";
import { CardDragItem } from "./DragItem";
import { useAppState } from "./AppStateContext";
import { useItemDrag } from "./useItemDrag";

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text, id, index, columnId, isPreview }: CardProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "CARD", id, index, text, columnId });
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;
    },
  });

  return <CardContainer>{text}</CardContainer>;
};

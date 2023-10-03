import React from "react";
import { CardContainer } from "./styles";
import { useDrop } from "react-dnd";
import { CardDragItem } from "./DragItem";

interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

export const Card = ({ text, id, index, columnId, isPreview }: CardProps) => {
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }
    },
  });

  return <CardContainer>{text}</CardContainer>;
};

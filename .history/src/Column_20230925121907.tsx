import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";
import { useRef } from "react";
import { useItemDrag } from "../src/useItemDrag";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });

  drag(ref);

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, takeId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};

import React, { ChangeEvent, useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={handleChange} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

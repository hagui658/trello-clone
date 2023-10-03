import { DragItem } from "../DragItem";

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean => {
  const hidden = Boolean(
    (isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id) ||
      (!isPreview &&
        draggedItem &&
        draggedItem.type === itemType &&
        draggedItem.id === id)
  );

  console.log(
    `isHidden - isPreview: ${isPreview}, itemType: ${itemType}, id: ${id}, hidden: ${hidden}`
  );

  return hidden;
};

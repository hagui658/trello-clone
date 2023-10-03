import { DragItem } from "../DragItem";

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean => {
  if (draggedItem?.id === undefined) {
    return true;
  } else {
    return false;
  }
  // return Boolean(
  //   !isPreview &&
  //     draggedItem &&
  //     draggedItem.type === itemType &&
  //     draggedItem.id === id
  // );
};

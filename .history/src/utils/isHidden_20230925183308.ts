import { DragItem } from "../DragItem";

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      
  );
};

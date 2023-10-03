import { DragItem } from "../DragItem";

export const isHidden = (
  isPreview: boolean | undefined,
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean => {
  // 如果是拖拽预览（isPreview为true），或者拖拽项的类型与列的类型匹配，但不是拖拽预览，才隐藏列。
  return Boolean(
    (isPreview && itemType === "COLUMN") ||
      (!isPreview &&
        draggedItem &&
        draggedItem.type === itemType &&
        draggedItem.id === id)
  );
};

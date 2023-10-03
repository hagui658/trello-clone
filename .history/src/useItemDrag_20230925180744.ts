import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag(() => ({
    type: item.type,
    item,
    end: () => {
      // 在拖拽结束时触发的逻辑
      console.log("Drag ended with item:", item);
      dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined });
    },
  }));
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};

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
    begin: () => {
      // 在拖拽开始时设置type和payload
      dispatch({ type: "SET_DRAGGED_ITEM", payload: item });
    },
    end: () => {
      // 在拖拽结束时触发的逻辑
      dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined });
    },
  }));
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};

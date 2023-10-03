import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useItemDrag = (item: DragItem) => {
  console.log(111111111111);

  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag(() => ({
    type: item.type,
    item: item,
    end: () => {
      // 在拖拽结束时触发的逻辑
      console.log(222222222222222);

      dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined });
    },
  }));
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { drag };
};

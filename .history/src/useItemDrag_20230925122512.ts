import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag(() => ({
    type: item.type,
    item: item,
    end: () => {
      // 在拖拽结束时触发的逻辑
      dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined });
    },
  }));
  return { drag };
};

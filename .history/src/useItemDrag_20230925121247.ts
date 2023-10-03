import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./DragItem";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const spec = {
    type: item.type,
    item,
    collect: (monitor: { isDragging: () => any }) => ({
      isDragging: monitor.isDragging(),
    }),
    begin: () => {
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item,
      });
    },
    end: () => {
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: undefined,
      });
    },
  };
  const [collectedProps, drag] = useDrag(spec);
  return { drag };
};

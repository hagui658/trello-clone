import { Column } from "./Column";
import { CustomDragLayerContainer } from "./styles";
import { XYCoord, useDragLayer } from "react-dnd";

const CustomDragLayer: React.FC = () => {
  const { isDragging, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <Column id={item.id} text={item.text} index={item.index} />
    </CustomDragLayerContainer>
  ) : null;
};

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px,${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

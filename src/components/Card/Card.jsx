import { Draggable } from "react-beautiful-dnd";
import "./Card.css";

/**
 * Represents a draggable card within a column.
 */
export default function Card({ id, title, description, index }) {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="card"
          id={id}
          ref={provided.innerRef}
          {...provided.dragHandleProps} // For custom drag handles
          {...provided.draggableProps}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </Draggable>
  );
}

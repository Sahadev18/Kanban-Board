import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

//Renders a draggable card which contains details within column
export default function Card({
  id,
  title,
  description,
  index,
  cards,
  setColumn,
}) {
  function onDelete() {
    const newCards = cards.filter((card) => card.id !== id);
    setColumn(newCards);
  }

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
          <div id="card-action">
            <FontAwesomeIcon
              onClick={onDelete}
              id="trash"
              icon={faTrash}
              style={{ color: "red" }}
            />
          </div>
          <h3>{title}</h3>
          <p id="description">{description}</p>
        </div>
      )}
    </Draggable>
  );
}

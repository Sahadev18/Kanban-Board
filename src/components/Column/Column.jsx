import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card.jsx";
import "./Column.css";

/**
 * Represents a column within the Kanban board where cards can be placed.
 */
export default function Column({ id, name, cards }) {
  return (
    <div className="column" id={id}>
      <h2>{name}</h2>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            className="card-section"
            ref={provided.innerRef}
            {...provided.droppableProps} // Props for drop behavior
          >
            {cards.map((card, index) => (
              <Card key={card.id} {...card} index={index} />
            ))}
            {provided.placeholder} {/* Placeholder for dropped items */}
          </div>
        )}
      </Droppable>
    </div>
  );
}

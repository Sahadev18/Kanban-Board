import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card.jsx";
import "./Column.css";
import { useState } from "react";

//Renders a column within the Kanban board where cards can be placed.
export default function Column({ id, name, cards, setColumn, searchValue }) {
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
            {searchValue
              ? //if search value exists render cards whose title match the search value
                cards
                  .filter((card) =>
                    card.title.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((card, index) => (
                    <Card
                      key={card.id}
                      {...card}
                      index={index}
                      cards={cards}
                      setColumn={setColumn}
                    />
                  ))
              : //if search value does not exist render all the cards
                cards.map((card, index) => (
                  <Card
                    key={card.id}
                    {...card}
                    index={index}
                    cards={cards}
                    setColumn={setColumn}
                  />
                ))}
            {provided.placeholder} {/* Placeholder for dropped items */}
          </div>
        )}
      </Droppable>
    </div>
  );
}

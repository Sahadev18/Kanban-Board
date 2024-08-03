import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import Column from "../Column/Column.jsx";
import AddCardButton from "../AddCardButton/AddCardButton.jsx";
import SearchCard from "../SearchCard/SearchCard.jsx";
import "./Board.css";

export default function Board({ boardName }) {
  //State to manage all the cards in different columns
  const [todos, setTodos] = useState([]);
  const [doings, setDoings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [dones, setDones] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  //updating the board when the dragging of a card ends
  function handleDragEnd(result) {
    //creating a copy of cards array from each column
    const newTodos = todos.slice();
    const newDoings = doings.slice();
    const newReviews = reviews.slice();
    const newDones = dones.slice();

    //active card
    let draggedCard;

    //Card being dropped outside the droppable area
    if (!result.destination) return;

    //removing card from the source column
    if (result.source.droppableId === "col-1") {
      [draggedCard] = newTodos.splice(result.source.index, 1);
      setTodos(newTodos);
    } else if (result.source.droppableId === "col-2") {
      [draggedCard] = newDoings.splice(result.source.index, 1);
      setDoings(newDoings);
    } else if (result.source.droppableId === "col-3") {
      [draggedCard] = newReviews.splice(result.source.index, 1);
      setReviews(newReviews);
    } else if (result.source.droppableId === "col-4") {
      [draggedCard] = newDones.splice(result.source.index, 1);
      setDones(newDones);
    }

    //adding card to the destination column
    if (result.destination.droppableId === "col-1") {
      newTodos.splice(result.destination.index, 0, draggedCard);
      setTodos(newTodos);
    } else if (result.destination.droppableId === "col-2") {
      newDoings.splice(result.destination.index, 0, draggedCard);
      setDoings(newDoings);
    } else if (result.destination.droppableId === "col-3") {
      newReviews.splice(result.destination.index, 0, draggedCard);
      setReviews(newReviews);
    } else if (result.destination.droppableId === "col-4") {
      newDones.splice(result.destination.index, 0, draggedCard);
      setDones(newDones);
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div id="board">
        <h1>{boardName}</h1>
        <div id="add-n-search">
          <AddCardButton todos={todos} setTodos={setTodos} />
          <SearchCard onSearch={(value) => setSearchValue(value)} />
        </div>
        <div id="columns">
          <Column
            key="col-1"
            id="col-1"
            name="To do"
            cards={todos}
            setColumn={setTodos}
            searchValue={searchValue}
          />
          <Column
            key="col-2"
            id="col-2"
            name="In Progress"
            cards={doings}
            setColumn={setDoings}
            searchValue={searchValue}
          />
          <Column
            key="col-3"
            id="col-3"
            name="Peer Review"
            cards={reviews}
            setColumn={setReviews}
            searchValue={searchValue}
          />
          <Column
            key="col-4"
            id="col-4"
            name="Done"
            cards={dones}
            setColumn={setDones}
            searchValue={searchValue}
          />
        </div>
      </div>
    </DragDropContext>
  );
}

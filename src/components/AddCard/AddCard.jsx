import { useState } from "react";
import "./AddCard.css";

//Renders a form to add a card to the board
export default function AddCard({ onClose, addCard }) {
  // State to manage the title of the new card.
  const [title, setTitle] = useState("");

  // State to manage the description of the new card.
  const [description, setDescription] = useState("");

  //Handles the form submission event. Validates input and calls the addCard prop function if both title and description are provided.
  function handleClick(event) {
    event.preventDefault();

    // Check if both title and description are filled before adding the card.
    if (title !== "" && description !== "") {
      addCard(title, description);
    }

    // Reset the form after successful submission or on cancel.
    setTitle("");
    setDescription("");
  }

  return (
    <div id="add-card">
      <form id="details">
        <h3 className="model-text">Enter Details</h3>
        <input
          type="text"
          placeholder="Title*"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          name=""
          placeholder="Description*"
          rows={10}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <div className="action">
          <button type="submit" onClick={handleClick}>
            Add
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

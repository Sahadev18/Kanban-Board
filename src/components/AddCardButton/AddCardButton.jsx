import { useState, lazy, Suspense } from "react";
import { v4 as uuidv4 } from "uuid";
const AddCardDetails = lazy(() =>
  import("../AddCardDetails/AddCardDetails.jsx")
);
import "./AddCardButton.css";

export default function AddCard({ todos, setTodos }) {
  //State to manage the 'add details' popup model
  const [popup, setPopup] = useState(false);

  //updating the todos cololumn after adding a card
  function addCard(title, description) {
    setTodos([
      ...todos,
      { id: uuidv4(), title: title, description: description },
    ]);
  }

  return (
    <>
      <button id="add-card-button" onClick={() => setPopup(true)}>
        + Add Card
      </button>
      {popup && (
        <Suspense>
          <AddCardDetails onClose={() => setPopup(false)} addCard={addCard} />
        </Suspense>
      )}
    </>
  );
}

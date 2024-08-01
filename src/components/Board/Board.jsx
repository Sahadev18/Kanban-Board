import { useState } from 'react';
import { columns } from './columns.js'
import { v4 as uuidv4 } from 'uuid'
import AddCard from '../AddCard/AddCard.jsx';
import Column from '../Column/Column.jsx'
import './Board.css'

export default function Board({boardName}) {
  const [showModel, setShowModel] = useState(false);
  const [cards, setCards] = useState([]);

  function addCard(title, description) {
    setCards([...cards, {id: uuidv4(), name: title, description: description}]);
  }

  return(
        <div id='board'>
            <h1>{boardName}</h1>
            <div id="columns">
              {columns.map( (column) => 
                <Column 
                  key={column.id} 
                  id={column.id}
                  name={column.name}
                  color={column.color}
                  cards={cards}
                  setCards={setCards}
                />
              )}
            </div>
            <button onClick={() => setShowModel(true)}>Add Card</button>
            {showModel && <AddCard onClose={() => setShowModel(false)} addCard={addCard}/>}
        </div>
    );
}
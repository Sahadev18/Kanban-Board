import './AddCard.css'
import { useState } from 'react';

export default function AddCard({onClose, addCard}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handelClick(e) {
        e.preventDefault();
        title != '' && description != '' && addCard(title, description);
        setTitle('');
        setDescription('');
    }
  
    return(
      <div id='add-card'>
        <form id='details'>
          <h3 className='model-text'>Enter Details</h3>
          <input type="text"  placeholder='title*' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <textarea name="" id="" placeholder='description*' rows={10} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <div className='action'>
            <button type='submit' onClick={handelClick}>Add</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    );
}
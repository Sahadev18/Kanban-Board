import {Reorder} from 'framer-motion'
import Card from '../Card/Card.jsx'
import './Column.css'

export default function Column({id, name, color, cards, setCards}) {
    return(
        <div className="column" id={id}>
            <h2 style={{backgroundColor: `${color}`}}>{name}</h2>
            <div className='card-section' id={id + '-card-section'}>
                <Reorder.Group values={cards} onReorder={setCards}>
                    {id === 'col1' && (cards.map( (card) =>
                        <Reorder.Item value={card} key={card.id}>
                            <Card
                                {...card}
                                color={color}
                            />
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>
        </div>
    );
}
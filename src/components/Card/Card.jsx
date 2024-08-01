import './Card.css'

export default function Card({id, name, description, color}) {
    return(
        <div className="card" id={id}>
            <h3 style={{background: `${color}`}}>{name}</h3>
            <p>{description}</p>
        </div>
    );
}
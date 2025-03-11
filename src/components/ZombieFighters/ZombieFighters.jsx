
const ZombieFighters = (props) => {

    return (
        <li>
            <img src={props.img} />
            <h3>{props.name}</h3>
            <p><span>Price: </span>{props.price}</p>
            <p><span>Strength: </span>{props.strength} </p>
            <p><span>Agility: </span>{props.agility} </p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </li>
    )
}

export default ZombieFighters;
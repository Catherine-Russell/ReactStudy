export function BestPokemon(props) {
    return (
        <div>
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>Pokedex: {props.pokedex}</p>
        </div>
    )
}
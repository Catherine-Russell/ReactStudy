export function BestPokemon({ name, img, pdexNumber, pokedex }) {
  return (
    <div id="best-pokemon">
      <img src={img} alt={name} />
      <h3>
        No. {pdexNumber}: {name}
      </h3>
      <p>Pokedex: {pokedex}</p>
    </div>
  );
}

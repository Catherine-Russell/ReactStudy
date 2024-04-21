import React from 'react';
import { Header } from './components/Header';
import { MainGoal } from './components/MainGoal';
import { BestPokemon } from './components/BestPokemon';


function App() {
  return (
    <div>
      <Header />

      <main id="best-practice">
        <h2>Time to get started!</h2>
      <MainGoal />
      <section id="best-pokemon">
        
        <h2>Best Pokemon</h2>
        <BestPokemon name="Pikachu" img="https://img.pokemondb.net/sprites/black-white/normal/pikachu-f.png" pokedex="When it is angered, it immediately discharges the energy stored in the pouches in its cheeks." />
        <BestPokemon name="Arcanine" img="https://img.pokemondb.net/sprites/black-white/normal/arcanine.png" pokedex="Its magnificent bark conveys a sense of majesty. Anyone hearing it can't help but grovel before it." />
        <BestPokemon name="Lapras" img="https://img.pokemondb.net/sprites/diamond-pearl/normal/lapras.png" pokedex="They have gentle hearts. Because they rarely fight, many have been caught. Their number has dwindled." />
        <BestPokemon name="Eevie" img="https://img.pokemondb.net/sprites/diamond-pearl/normal/eevee.png" pokedex="Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs." />
      </section>

      </main>
    </div>
  );
}

export default App;

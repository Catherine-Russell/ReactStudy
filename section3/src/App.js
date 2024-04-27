import React from "react";
import { Header } from "./components/Header";
import { MainGoal } from "./components/MainGoal";
import { BestPokemon } from "./components/BestPokemon";
import pokemon from "./data";

function App() {
  console.log({ ...pokemon.pikachu });
  return (
    <div>
      <Header />

      <main id="best-practice">
        <h2>Time to get started!</h2>
        <MainGoal />
        <section id="best-pokemon">
          <h2>Best Pokemon</h2>
          <BestPokemon {...pokemon.pikachu} />
          <BestPokemon {...pokemon.arcanine} />
          <BestPokemon {...pokemon.lapras} />
          <BestPokemon {...pokemon.eevee} />
        </section>
      </main>
    </div>
  );
}

export default App;

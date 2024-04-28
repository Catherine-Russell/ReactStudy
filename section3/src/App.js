import React from "react";
import { Header } from "./components/Header";
import { MainGoal } from "./components/MainGoal";
import { BestPokemon } from "./components/BestPokemon";
import pokeData from "./pokeData";
import { InformationSection } from "./components/InformationSection/InformationSection";

function App() {
  return (
    <div>
      <Header />
      <main id="best-practice">
        <h2>Time to get started!</h2>
        <MainGoal />
        <InformationSection />
        <section id="best-pokemon">
          <h2>Best Pokemon</h2>
          {pokeData.map((pokemon) => (
            <BestPokemon key={pokemon.name} {...pokemon} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { Header } from "./components/Header";
import { MainGoal } from "./components/MainGoal";
import { BestPokemon } from "./components/BestPokemon";
import pokemon from "./pokeData";
import { TabButton } from "./components/TabButton";

function App() {
  const handleButtonClick = (selectedButton) => {
    console.log(selectedButton);
  };
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
        <menu>
          <TabButton onClick={() => handleButtonClick("button number 1")}>
            Click me
          </TabButton>
          <TabButton onClick={() => handleButtonClick("button number 2")}>
            Click me too
          </TabButton>
        </menu>
      </main>
    </div>
  );
}

export default App;

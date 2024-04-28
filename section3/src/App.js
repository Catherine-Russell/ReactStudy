import React from "react";
import { Header } from "./components/Header";
import { MainGoal } from "./components/MainGoal";
import { BestPokemon } from "./components/BestPokemon";
import pokeData from "./pokeData";
import { InformationSection } from "./components/InformationSection/InformationSection";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Header />
      <main id="best-practice">
        <MainGoal />
        <InformationSection />
        <Section id="best-pokemon" title="Best Pokemon">
          {pokeData.map((pokemon) => (
            <BestPokemon key={pokemon.name} {...pokemon} />
          ))}
        </Section>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { Header } from "./components/Header";
import { MainGoal } from "./components/MainGoal";
import { BestPokemon } from "./components/BestPokemon";
import pokeData from "./pokeData";
import { InformationSection } from "./components/InformationSection/InformationSection";

function App() {
  const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];
  function Todo({ text }) {
    return <li>{text}</li>;
  }
  return (
    <div>
      <>
        {DUMMY_TODOS[0]}
        {DUMMY_TODOS.map((item) => (
          <>
            <p>hello {item}</p>
            <Todo text={item} />
          </>
        ))}
        {/* {DUMMY_TODOS.map((item) => {
            <p>{item}</p>;
          })} */}
      </>
      ;
      {/* <Header />
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
      </main> */}
    </div>
  );
}

export default App;

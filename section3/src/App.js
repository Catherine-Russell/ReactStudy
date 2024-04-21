import React from 'react';
import reactImg from "./assets/react-core-concepts.png"

const dynamicValues = ["goals", "aims", "intentions"]


export function MainGoal() {
    const i = Math.floor(Math.random() * 4);
    const synonym = dynamicValues[i]
    return (
    <div>
        <h1> My main {synonym}</h1>
        <ul>
        <li>Complete React Complete Guide</li>
        <li>World Domination</li>
        </ul>
    </div>
    )
}


function App() {
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

      <main>
        <h2>Time to get started!</h2>
      </main>
      <MainGoal />

    </div>
  );
}

export default App;

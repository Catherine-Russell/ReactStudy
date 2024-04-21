import React from 'react';

const dynamicValues = ["goals", "aims", "intentions"]


export function MainGoal() {
    const i = Math.floor(Math.random() * 4);
    return (
    <div>
        <h1> My main {dynamicValues[i]}</h1>
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
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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

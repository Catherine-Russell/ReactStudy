import PlayerNames from "./components/PlayerNames";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <PlayerNames />
        <GameBoard />
        board will go here
      </div>
      move log will go here
    </main>
  );
}

export default App;

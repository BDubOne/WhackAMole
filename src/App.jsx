import { useState, useRef } from 'react';
import RenderTable from './components/renderTable';
import './index.css'

function App() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [points, setPoints] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameInterval = useRef(null);

  const startGame = () => {
    if (gameInterval.current) {
      clearInterval(gameInterval.current);
    }

    setGameStarted(!gameStarted);

    gameInterval.current = setInterval(() => {
      const randomBoxIndex = Math.floor(Math.random() * 9);
      setSelectedBox(randomBoxIndex);
    }, 300);

    setTimeout(() => {
      clearInterval(gameInterval.current);
      setGameStarted(false);
    }, 30000);
  };

  const handleBoxClick = (boxIndex) => {
    if (selectedBox !== null && boxIndex === selectedBox) {
      setPoints((prevPoints) => prevPoints + 1);
    }
  };

  return (
    <div className="App">
      <h1>WhackaMole</h1>
      <div className="game-grid-container">
        <RenderTable
          gameStarted={gameStarted}
          selectedBox={selectedBox}
          handleBoxClick={handleBoxClick}
          startGame={startGame}
        />
      </div >
      <div className="start-button-container">
      {gameStarted ? (
        <p>Points: {points}</p>
      ) : (
        <button onClick={startGame}>Start</button>
      )}
      </div>
    </div>
  );
}

export default App;
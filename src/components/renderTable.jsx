function RenderTable({ gameStarted, selectedBox, handleBoxClick }) {
    return (
        <div className="game-grid">
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div className="grid-row" key={rowIndex}>
            {Array.from({ length: 3 }, (_, colIndex) => {
              const boxIndex = rowIndex * 3 + colIndex;
              const isBoxSelected = boxIndex === selectedBox;
  
              return (
                <div
                  key={colIndex}
                  onClick={() => handleBoxClick(boxIndex)}
                  className={`box ${isBoxSelected ? 'mole' : ''}`}
                >
                  {isBoxSelected ? 'Click Me!' : ''}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
  
  export default RenderTable;
import React, {useState} from 'react';
import Dictionary from './components/Dictionary/Dictionary';
import Instruction from './components/Instructions/Instructions';
import Memorize from './components/Memorize/Memomrize';
import Game from './components/Game/Game';

function App() {
  const [memorizeCard, setMemorizeCard] = useState(false);
  const [startGame, setstartGame] = useState(false)
  const [results, setResults] = useState([]); 
  
  const handleSearchLimitReached = () => {
    setMemorizeCard(true);
  };

  const executeGame = () => {
    setstartGame(true);
  }
  const handleResults = (newResults) => {
    setResults(prevResults => [...prevResults, ...newResults]);
  };

  return (
    <div className="App">
      <Instruction/>
      {!memorizeCard ? (
        <Dictionary handleSearchLimitReached = {handleSearchLimitReached}
           handleResults={handleResults} 
        />
      ) : (
        !startGame? (
          <Memorize results={results}
          executeGame={executeGame}
        />
        ) : (
          <Game results={results}/>
        )
        
      )}     
    </div>
  );
}

export default App;

import React from 'react';
import './Memorize.css'; // Make sure this path is correct

const Memorize = ({ results, executeGame }) => {
    
    return (
        <div className="memorize-container">
            <h2>Memorize the Vocabulary</h2>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                    <span className="word">{result.word}</span> {result.definition}
                    </li>
                ))}
            </ul>
            <button onClick={executeGame}>Start Game</button>
        </div>
    );
};

export default Memorize;

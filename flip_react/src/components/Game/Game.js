import React, { useState, useEffect } from 'react';
import './Game.css'; // Ensure this file exists for the styles

const Game = ({ results }) => {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [message, setMessage] = useState('');
    const totalCards = 6;

    useEffect(() => {
        // Initialize cards array with words and definitions
        const initCards = results.flatMap((result, num) => [
            { type: 'word', value: result.word, num },
            { type: 'definition', value: result.definition, num}
        ]);
        // Shuffle cards
        setCards(shuffle(initCards));
    }, [results]);

    const handleCardClick = (index) => {
        console.log(`flippedIndices 1: ${flippedIndices}`)
        // Prevent interaction if two cards are already flipped or card is already matched
        if (flippedIndices.length === 2 || matchedPairs.includes(index)) return;

        setFlippedIndices(prev => [...prev, index]); //[5]
        console.log(`flippedIndices 2: ${flippedIndices}`)

        if (flippedIndices.length === 1) {
            console.log(`flippedIndices 3: ${flippedIndices}`)
            const [firstIndex] = flippedIndices;
            const firstCard = cards[firstIndex];//
            const secondCard = cards[index];//clicked card
            
           
            console.log(`Comparing: ${firstCard.num} - ${secondCard.num}`);


            if (firstCard.num === secondCard.num && firstCard.type !== secondCard.type) {
                setMatchedPairs(prev => [...prev, firstIndex, index]);
            }

            // Reset flipped indices after a short delay to show the result of the flip
            setTimeout(() => {
                setFlippedIndices([]);
            }, 1000); // Adjust delay as needed
        }
    };

      // Use useEffect to check if all cards are matched
    useEffect(() => {
        // Check if all cards are matched
        if (matchedPairs.length === totalCards) {
            setMessage('Congratulations! All cards have been matched!')
            console.log('All cards have been matched!');
            // Perform any action when all cards are matched, e.g., end the game
        }
    }, [matchedPairs]);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <>
        <div className="game-container">
        {message && (
            <div className='congratulation'>
                <p>CONGRATULATION!</p>
                <p>All cards have been matched</p>
            </div>
        )
       }
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`card ${flippedIndices.includes(index) || matchedPairs.includes(index) ? 'flipped' : ''}`}
                    onClick={() => handleCardClick(index)}>

                <div className="card-content">
                    {flippedIndices.includes(index) || matchedPairs.includes(index) ? card.value : 'Click to Flip'}
                </div>
                </div>
            ))}
        </div>
        
        </>
    );
};

export default Game;

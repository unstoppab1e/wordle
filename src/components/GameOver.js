import React, { useContext } from 'react';
import {AppContext} from "../App";

function GameOver() {
    const { gameOver, currAttempt, correctWord } = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You Correctly Guessed" : "You Failed"}</h3>
        <h1>Correct Word: {correctWord}</h1>
        {gameOver.guessedWord && (
            <h3> You guessed in {currAttempt.attempt} attempts</h3>
        )}
    </div>
  )
}

export default GameOver;
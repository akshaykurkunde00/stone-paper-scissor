import React, { useState } from 'react';
import './Random.css';
import { IoStar } from "react-icons/io5";
import { Button, TextField } from '@mui/material';

const options = ['Rock', 'Paper', 'Scissors'];

const Random = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const generateComputerChoice = () => {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      return "Its a tie";
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const computerChoice = generateComputerChoice();
    const gameResult = determineWinner(choice, computerChoice);
    setResult(gameResult);
  };

  return (
    <>
  
    <div className={`game-container ${result === 'You win!' ? 'win' : result === 'You lose!' ? 'lose' : result === 'Its a tie' ? 'tie':''}`}>
      <h1>Rock, Paper, Scissors</h1>
      <div className='button-container'>
        {options.map((option) => (
          // <button >
          //   {option}
          // </button>
          <Button key={option} onClick={() => handleUserChoice(option)}>{option}</Button>
        ))}
      </div>
      <div className='result-container'>
        <p>Your choice: {userChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <h1>{result}</h1>
        
      </div>
    </div>
   
    
      
  
    </>
  );
};

export default Random;

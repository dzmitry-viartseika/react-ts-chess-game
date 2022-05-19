import React, {useEffect, useState} from 'react';
import BoardTemplate from './components/Board/BoardTemplate';
import {Board} from "./models/Board";
import './assets/scss/styles.scss';

const App = () => {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restartGame();
    }, [])

    const restartGame = () => {
        console.log('www');
        const newBoard = new Board();
        console.log('newBoard', newBoard);
        newBoard.initCells();
        setBoard(newBoard);
    }

  return (
    <div className={'App'}>
        <BoardTemplate board={board} setBoard={setBoard}/>
        <button onClick={restartGame}>Reset Game</button>
    </div>
  );
}

export default App;

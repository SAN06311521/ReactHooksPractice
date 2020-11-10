import React, {useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../Helpers';

function Game() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [XIsNext, setXIstNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const finalBoard = [...board]; //this is the copy of the board and by ...board we create  clone of board to avoid repeating 
        if( winner || finalBoard[i]) return; // if user clicks on the right place of win then we will retun
        finalBoard[i] = XIsNext ? "X" : "O";
        setBoard(finalBoard);
        setXIstNext(!XIsNext);
    }

    const renderMoves = () => {
        return (
            <button onClick={() => setBoard(Array(9).fill(null))} style={style}>
                Start the Game!
            </button>
        )
        
    }

    const style = {
        margin: '50px auto',
        fontWeight: 'bold',
        marginLeft: '400px'
    }

    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={style}>
                <p>{winner ? 'The winner is: ' + winner : 'Next turn: ' + (XIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;
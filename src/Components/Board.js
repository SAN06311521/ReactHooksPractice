import React from 'react';
import Square from './Square';

function Board({ squares, onClick }) {
    
    const style = {
        border: '5px solid #b3b1f2',
        borderRadius: '10px',
        width: '400px',
        height: '400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
        padding: '5px',
        marginTop: '50px'
    }
    
    return (
        <div style={style}>
            {squares.map((squares, i) => (
                <Square key={i} value={squares} onClick={() => onClick(i)}/>
            ))}
        </div>
        
    )
}

export default Board;
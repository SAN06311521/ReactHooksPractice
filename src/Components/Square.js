import React from 'react';

function Square({ value, onClick }) {
    
    const style = {
        background: '#73faa4',
        fontSize: '50px',
        border: '3px solid #011a3b',
        cursor: 'pointer',
        outline: 'none',
        fontWeight: 'bold',
        borderRadius: '5px'
    }

    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;
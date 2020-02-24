import React from 'react';

const userOutput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div style={style}>
            <p>Hello from {props.username}</p>
            <p>Hola de {props.username}</p>
        </div>
    )
};

export default userOutput;
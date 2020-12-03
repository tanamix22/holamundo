import React from 'react';

const HolaMundo = () => {
    const Hello = 'FREENASS'
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>sistemas de backup</h2>
            <img src= "https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4>esto esverdad</h4> : <h5>soy falso</h5>}
            {isTrue && <h4>soy verdadero</h4>}
        </div>
    );
};

export default HolaMundo;

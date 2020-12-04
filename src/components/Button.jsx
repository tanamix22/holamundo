import React from 'react';


const Button = props => {
    const {text, text2, text3} = props;
    return (
        <div>
            <button type="button">{props.text} </button>
            <button type="button">{text} </button>
            <button type="button">{text2} </button>
            <button type="button">{text3} </button>
        </div>
    )
} ;

export default Button;
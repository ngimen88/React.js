import React from "react";

const Card = ({children}) => {
    return (
        <div style= {{
            border: '1px solid green',
            borderRadius: '16px',
            padding: '1rem'
        }} >{children}</div>

    )
};

export default Card;
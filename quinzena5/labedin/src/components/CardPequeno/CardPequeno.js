import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <p1>{ props.email }</p1>
            </div>
        </div>
        
    )
}

export default CardPequeno;
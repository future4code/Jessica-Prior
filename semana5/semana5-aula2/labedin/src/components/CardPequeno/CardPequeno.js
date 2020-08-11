import React from 'react';
import './CardPequeno.css'

function CardPEqueno(props) {
    return (
        <div className="SmallCard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPEqueno;
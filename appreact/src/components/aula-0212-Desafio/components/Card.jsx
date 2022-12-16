import React from "react";
import { card as cardStyle } from "../styles/styles";

const Card = ({ nome, propriedades }) => {
    return (
        <div style={ cardStyle }>
            <h2>{ nome }</h2>
            <ul>
                {propriedades
                .map( item => (
                    <li key={ item + '_item' }>{ item }</li>
                ))}
            </ul>
        </div>
    )
}

export default Card;

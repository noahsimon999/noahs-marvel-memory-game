import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectHero(props.name)}>
                <img alt={props.name} src={props.image}></img>
            </a>
        </div>
    </div>
);

export default Card;

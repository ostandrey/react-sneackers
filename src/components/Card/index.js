import React from 'react';
import classes from './Card.module.scss';

const Card = ({card}) => {
    return (
        <div className={classes.card}>
            <div className={classes.favourite}>
                <img src="/assets/btn-heart-regular.svg" alt="Add to favourite"/>
            </div>
            <img height={112} src={card.imageUrl} alt="sneaker-1"/>
            <h5>{card.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Cost: </span>
                    <b>{card.price}</b>
                </div>
                <button className="button" onClick={card.onClick}>
                    <img width={11} height={11} src="/assets/plus.svg" alt="add"/>
                </button>
            </div>
        </div>
    );
};

export default Card;
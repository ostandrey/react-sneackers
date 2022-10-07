import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="favourite">
                <img src="/assets/btn-heart-regular.svg" alt="Add to favourite"/>
            </div>
            <img height={112} src="/assets/sneakers/1.jpg" alt="sneaker-1"/>
            <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Cost: </span>
                    <b>120$</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/assets/plus.svg" alt="add"/>
                </button>
            </div>
        </div>
    );
};

export default Card;
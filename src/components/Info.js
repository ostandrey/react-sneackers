import React, {useContext} from 'react';
import {AppContext} from "../context";


const Info = ({title, description, image}) => {
    const {setIsOpenedCart} = useContext(AppContext)

    return (
        <div className="cart-empty d-flex align-center justify-center flex-column flex">
            <img src={image} alt="empty box" className="mb-20" width="120px"/>
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button className="green-btn" onClick={() => setIsOpenedCart(false)}>
                <img src="/assets/arrow.svg" alt="arrow"/>
                Go back
            </button>
        </div>
    );
};

export default Info;
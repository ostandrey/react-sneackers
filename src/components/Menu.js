import React from 'react';

const Menu = () => {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="menu">
                <h2 className="mb-30 d-flex justify-between ">
                    Cart
                    <img className="btn-remove cu-p" src="/assets/btn-remove.svg" alt="Remove"/>
                </h2>

                <div className="items">
                    <div className="cart-item d-flex align-center justify-between mb-20">
                        <div className="mr-20">
                            <img width={70} height={70} src="/assets/sneakers/1.jpg" alt="Sneakers"/>
                        </div>
                        <div className="mr-20">
                            <p className="mb-5">Men`s sneakers Nike Blazer Mid Suede</p>
                            <b>120 $</b>
                        </div>
                        <img className="btn-remove" src="/assets/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cart-item d-flex align-center justify-between mb-20">
                        <div className="mr-20">
                            <img width={70} height={70} src="/assets/sneakers/2.jpg" alt="Sneakers"/>
                        </div>
                        <div className="mr-20">
                            <p className="mb-5">Men`s sneakers Nike Blazer Mid Suede</p>
                            <b>120 $</b>
                        </div>
                        <img className="btn-remove" src="/assets/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cart-block">
                    <ul>
                        <li className="d-flex">
                            <span>Total:</span>
                            <div/>
                            <b>120 $</b>
                        </li>
                        <li className="d-flex">
                            <span>Tax 5%</span>
                            <div/>
                            <b>5 $</b>
                        </li>
                    </ul>
                    <button className="green-btn">
                        Checkout
                        <img src="/assets/arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
import React from 'react';

const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center" >
                <img width={40} height={40} src="/assets/logo.svg" alt='logo'/>
                <div>
                    <h3 className="text-uppercase">Sneakers Shop</h3>
                    <p>Shop of the Best sneakers</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/assets/basket.svg" alt='basket'/>
                    <span>120 $</span>
                </li>
                <li>
                    <img width={18} height={18} src="/assets/favourites.svg" alt='favourites'/>
                </li>
                <li>
                    <img width={18} height={18} src="/assets/profile.svg" alt='profile'/>
                </li>
            </ul>
        </header>
    );
};

export default Header;
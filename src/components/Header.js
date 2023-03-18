import React from 'react';
import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

const Header = (props) => {
    const {totalPrice} = useCart()

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center" >
                    <img width={40} height={40} src="/assets/logo.svg" alt='logo'/>
                    <div>
                        <h3 className="text-uppercase">Sneakers Shop</h3>
                        <p>Shop of the Best sneakers</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-30" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/assets/basket.svg" alt='basket'/>
                    <span>{totalPrice} $</span>
                </li>
                <li>
                    <Link to="/favourites">
                        <img width={18} height={18} src="/assets/favourites.svg" alt='favourites'/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="/assets/profile.svg" alt='profile'/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
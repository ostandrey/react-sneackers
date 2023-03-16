import React, {useContext, useState} from 'react';
import Info from "./Info";
import {AppContext} from "../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Menu = ({onClose, items = [], onRemove, ...props}) => {
    const {cartItems, setCartItems} = useContext(AppContext)

    const [isOrderCompleted, setIsOrderCompleted] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            //Create orders path
            const {data} = await axios.post("https://63e4e77ac04baebbcdaebb78.mockapi.io/orders", {
                items: cartItems
            })
            setOrderId(data.id)
            setIsOrderCompleted(true)
            setCartItems([])

            for( let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://63493656a59874146b1a27fc.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (e) {
            alert('Failed to create an order')
        }
        setIsLoading(false)
    }

    return (
        <div className="overlay">
            <div className="menu">
                <h2 className="mb-30 d-flex justify-between ">
                    Cart
                    <img
                        className="btn-remove cu-p"
                        src="/assets/btn-remove.svg"
                        alt="Remove"
                        onClick={onClose}
                    />
                </h2>
                {
                    items.length > 0 ?
                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {
                                    items.map(obj => (
                                        <div className="cart-item d-flex align-center justify-between mb-20" key={obj.id}>
                                            <div className="mr-20">
                                                <img width={70} height={70} src={obj.imageUrl} alt="Sneakers"/>
                                            </div>
                                            <div className="mr-20">
                                                <p className="mb-5">{obj.name}</p>
                                                <b>{obj.price} $</b>
                                            </div>
                                            <img
                                                className="btn-remove"
                                                src="/assets/btn-remove.svg"
                                                alt="Remove"
                                                onClick={() => onRemove(obj.id)}/>
                                        </div>
                                    ))
                                }

                                {/*<div className="cart-item d-flex align-center justify-between mb-20">*/}
                                {/*    <div className="mr-20">*/}
                                {/*        <img width={70} height={70} src="/assets/sneakers/2.jpg" alt="Sneakers"/>*/}
                                {/*    </div>*/}
                                {/*    <div className="mr-20">*/}
                                {/*        <p className="mb-5">Men`s sneakers Nike Blazer Mid Suede</p>*/}
                                {/*        <b>120 $</b>*/}
                                {/*    </div>*/}
                                {/*    <img className="btn-remove" src="/assets/btn-remove.svg" alt="Remove"/>*/}
                                {/*</div>*/}
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
                                <button disabled={isLoading} className="green-btn" onClick={onClickOrder}>
                                    Checkout
                                    <img src="/assets/arrow.svg" alt="arrow"/>
                                </button>
                            </div>
                        </div>
                        :
                        <Info
                            title={isOrderCompleted ? "Success order" : "Cart is empty"}
                            description={isOrderCompleted ? `Thanks for ordering #${orderId}`  : "Add at least sneakers to order"}
                            image={isOrderCompleted ?"/assets/complete-order.jpg" : "/assets/box.svg"}
                        />
                }

            </div>
        </div>
    );
};

export default Menu;
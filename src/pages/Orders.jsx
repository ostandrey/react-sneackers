import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card";
import {AppContext} from "../context";
import axios from "axios";

const Orders = () => {
    const {onAddToFavourite, onAddToCart} = useContext(AppContext)
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://63e4e77ac04baebbcdaebb78.mockapi.io/orders')
                // console.log(data.map(obj => obj.items).flat())
                // data.reduce((prev, obj) => [...prev, ...obj.items], [])
                setOrders(data.map(obj => obj.items).flat());
                setIsLoading(false);
            } catch (e) {
                alert("Request error")
                console.error(e)
            }
        })()
    }, [])



    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between">
                <h1>My Orders</h1>
            </div>
            <div className="sneakers-cards d-flex mt-40 flex-wrap">
                {(isLoading ? [...Array(8)] : orders)
                    .map((item, index) =>
                        <Card
                            key={index}
                            loading={isLoading}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Orders;
import React, {useContext} from 'react';
import Card from "../components/Card";
import {AppContext} from "../context";

const Favourites = () => {
    const {favourites, onAddToFavourite} = useContext(AppContext)
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between">
                <h1>Favourites</h1>
            </div>
            <div className="sneakers-cards d-flex mt-40 flex-wrap">
                {favourites
                    .map((item, index) =>
                        <Card
                            key={index}
                            favourited={true}
                            onFavourite={onAddToFavourite}
                            {...item}
                            // onAdd={(obj) => onAddToCart(obj)}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Favourites;
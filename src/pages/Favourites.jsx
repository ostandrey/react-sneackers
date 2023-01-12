import React from 'react';
import Card from "../components/Card";

const Favourites = ({items, onAddToFavourite}) => {
    console.log(items);
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between">
                <h1>Favourites</h1>
                {/*<div className="search">*/}
                {/*    <img src="/assets/search.svg" alt="search"/>*/}
                {/*    {*/}
                {/*        searchValue && <img className="btn-remove cu-p clear" src="/assets/btn-remove.svg" alt="Clear" onClick={() => setSearchValue('')}/>*/}
                {/*    }*/}
                {/*    <input type="text" placeholder="Search..." onChange={onChangeSearch} value={searchValue}/>*/}
                {/*</div>*/}
            </div>
            <div className="sneakers-cards d-flex justify-between mt-40 flex-wrap">
                {items
                    .map((item) =>
                        <Card
                            key={item.imageUrl}
                            favourited={true}
                            onFavourite={(obj) => onAddToFavourite(obj)}
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
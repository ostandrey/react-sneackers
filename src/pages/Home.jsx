import React from 'react';
import Card from "../components/Card";

const Home = ({items, searchValue, onAddToCart, onChangeSearch, onAddToFavourite, setSearchValue }) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between">
                <h1>{searchValue ? `Search: "${searchValue}"` : "All Sneakers" }</h1>
                <div className="search">
                    <img src="/assets/search.svg" alt="search"/>
                    {
                        searchValue && <img className="btn-remove cu-p clear" src="/assets/btn-remove.svg" alt="Clear" onClick={() => setSearchValue('')}/>
                    }
                    <input type="text" placeholder="Search..." onChange={onChangeSearch} value={searchValue}/>
                </div>
            </div>
            <div className="sneakers-cards d-flex justify-between mt-40 flex-wrap">
                {items
                    .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item) =>
                        <Card
                            key={item.imageUrl}
                            onFavourite={(obj) => onAddToFavourite(obj)}
                            onAdd={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Home;
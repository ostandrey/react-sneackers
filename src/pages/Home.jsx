import React from 'react';
import Card from "../components/Card";

const Home = ({
   items,
   cartItems,
   searchValue,
   onAddToCart,
   onChangeSearch,
   onAddToFavourite,
   setSearchValue,
    isLoading
}) => {

    const renderItems = () => {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

        return ( isLoading ? [...Array(8)] : filteredItems).map((item, index) =>
            <Card
                key={index}
                onFavourite={(obj) => onAddToFavourite(obj)}
                onAdd={(obj) => onAddToCart(obj)}
                added={cartItems.some(obj => obj.id === item.id)}
                loading={isLoading}
                {...item}
            />
        )
    }

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
                {
                    renderItems()
                }
            </div>
        </div>
    );
};

export default Home;
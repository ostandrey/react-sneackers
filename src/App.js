import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

import {AppContext} from "./context";


// const arr = [
//   {
//     "name": "Men`s sneakers Nike Blazer Mid Suede",
//     "price": 120,
//     "imageUrl": "/assets/sneakers/1.jpg"
//   },
//   {
//     "name": "Men`s sneakers Nike Air Max 270",
//     "price": 150,
//     "imageUrl": "/assets/sneakers/2.jpg"
//   },
//   {
//     "name": "Men`s sneakers Nike Blazer Mid Suede",
//     "price": 90,
//     "imageUrl": "/assets/sneakers/3.jpg"
//   },
//   {
//     "name": "Men`s sneakers Puma X Aka Boku Future Rider",
//     "price": 100,
//     "imageUrl": "/assets/sneakers/4.jpg"
//   },
//   {
//     "name": "Men`s sneakers Under Armour Curry 8",
//     "price": 110,
//     "imageUrl": "/assets/sneakers/5.jpg"
//   },
//   {
//     "name": "Men`s sneakers Nike Kyrie 7",
//     "price": 130,
//     "imageUrl": "/assets/sneakers/6.jpg"
//   },
//   {
//     "name": "Men`s sneakers Jordan Air Jordan 11",
//     "price": 180,
//     "imageUrl": "/assets/sneakers/7.jpg"
//   },
//   {
//     "name": "Men`s sneakers Nike LeBron XVIII",
//     "price": 160,
//     "imageUrl": "/assets/sneakers/8.jpg"
//   },
//   {
//     "name": "Men`s sneakers Nike Lebron XVIII Low",
//     "price": 150,
//     "imageUrl": "/assets/sneakers/9.jpg"
//   },
//   {
//     "name": "Men`s sneakers Nike Kyrie Flytrap IV",
//     "price": 210,
//     "imageUrl": "/assets/sneakers/10.jpg"
//   },
// ]


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isOpenedCart, setIsOpenedCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      // fetch("https://63493656a59874146b1a27fc.mockapi.io/items")
      //     .then((res) => {
      //         return res.json();
      //     })
      //     .then(json => {
      //         setItems(json)
      //     })
      //https://sneakers.free.mockoapp.net

      setIsLoading(true)
      async function fetchData () {
          const itemsResponse = await axios.get('https://63493656a59874146b1a27fc.mockapi.io/items')
              // .then(res => setItems(res.data))
          const cartResponse = await axios.get('https://63493656a59874146b1a27fc.mockapi.io/cart')
              // .then(res => setCartItems(res.data))
          const favouritesResponse = await axios.get('https://63493656a59874146b1a27fc.mockapi.io/favourites')
              // .then(res => setFavourites(res.data))

          setIsLoading(false);

          setItems(itemsResponse.data);
          setCartItems(cartResponse.data);
          setFavourites(favouritesResponse.data);
      }

      fetchData();

  }, [])

    const onAddToCart = (obj) => {
      try {
          if (cartItems.find(item => item.id === obj.id)) {
              axios.delete(`https://63493656a59874146b1a27fc.mockapi.io/cart/${obj.id}`, obj.id)
              setCartItems((prev) => prev.filter(item => item.id !== obj.id))
          } else {
              axios.post('https://63493656a59874146b1a27fc.mockapi.io/cart', obj);
              setCartItems((prev) => [...prev, obj])
          }
      } catch (e) {
          alert('Sorry, something went wrong(')
      }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63493656a59874146b1a27fc.mockapi.io/cart/${id}`, id)
            // .then(res => setCartItems(res.data))
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavourite = async (obj) => {
      try {
          if (favourites.find(favObj => favObj.id === obj.id)) {
              axios.delete(`https://63493656a59874146b1a27fc.mockapi.io/favourites/${obj.id}`, obj.id)
              setFavourites((prev) => prev.filter((favObj) => favObj.id !== obj.id))
          } else {
              const {data} = await axios.post('https://63493656a59874146b1a27fc.mockapi.io/favourites', obj);
              setFavourites((prev) => [...prev, data])
          }
      } catch (err) {
          alert('Sorry, something went wrong(')
      }

    }

    const onChangeSearch = (event) => {
      setSearchValue(event.target.value)
    }

    const isAddedItems = (id) => {
      return cartItems.some(obj => Number(obj.id) === Number(id))
    }

  return (
      <AppContext.Provider value={{items, cartItems, favourites, isAddedItems, onAddToFavourite, setIsOpenedCart, setCartItems}}>
          <div className="wrapper clear">
              { isOpenedCart && <Menu items={cartItems} onClose={() => setIsOpenedCart(false)} onRemove={onRemoveItem}/> }

              <Header onClickCart={() => setIsOpenedCart(true)}/>

              <Routes>
                  <Route path="/" element={
                      <Home
                          items={items}
                          cartItems={cartItems}
                          searchValue={searchValue}
                          setSearchValue={setSearchValue}
                          setFavourites={setFavourites}
                          onAddToCart={onAddToCart}
                          onChangeSearch={onChangeSearch}
                          onAddToFavourite={onAddToFavourite}
                          isLoading={isLoading}
                      />
                  } />
                  <Route path="/favourites" exact element={
                      <Favourites/>
                  } />
              </Routes>
          </div>
      </AppContext.Provider>
  );
}

export default App;

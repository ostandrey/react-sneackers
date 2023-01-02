import Card from './components/Card';
import axios from "axios";
import Header from "./components/Header";
import Menu from "./components/Menu";
import React, {useEffect, useState} from "react";


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
  const [searchValue, setSearchValue] = useState('')
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  useEffect(() => {
      // fetch("https://63493656a59874146b1a27fc.mockapi.io/items")
      //     .then((res) => {
      //         return res.json();
      //     })
      //     .then(json => {
      //         setItems(json)
      //     })

      axios.get('https://63493656a59874146b1a27fc.mockapi.io/items')
          .then(res => setItems(res.data))
      axios.get('https://63493656a59874146b1a27fc.mockapi.io/cart')
          .then(res => setCartItems(res.data))
  }, [])

    const onAddToCart = (obj, prev) => {
        // console.log(prev)
        axios.post('https://63493656a59874146b1a27fc.mockapi.io/cart', obj);
        setCartItems(prev => {
            return prev.includes(item => item.name === obj.name) ? prev : [...prev, obj]
            // return [...prev, obj]
        })
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63493656a59874146b1a27fc.mockapi.io/cart/${id}`, id)
            .then(res => setCartItems(res.data))
    }

    const onChangeSearch = (event) => {
      setSearchValue(event.target.value)
    }

  return (
    <div className="wrapper clear">
      { isOpenedCart && <Menu items={cartItems} onClose={() => setIsOpenedCart(false)} onRemove={onRemoveItem}/> }
      <Header onClickCart={() => setIsOpenedCart(true)}/>
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
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onClickFavourite={() => console.log(item)}
                        onAdd={(obj) => onAddToCart(obj)}
                    />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;

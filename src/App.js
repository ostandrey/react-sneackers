import Card from './components/Card';
import Header from "./components/Header";
import Menu from "./components/Menu";

const arr = [
  {
    name: 'Men`s sneakers Nike Blazer Mid Suede',
    price: 120,
    imageUrl: '/assets/sneakers/1.jpg'
  },
  {
    name: 'Men`s sneakers Nike Air Max',
    price: 150,
    imageUrl: '/assets/sneakers/2.jpg'
  },
  {
    name: 'Men`s sneakers Nike Blazer Mid Suede',
    price: 90,
    imageUrl: '/assets/sneakers/3.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Menu/>
      <Header/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <h1>All Sneakers</h1>
          <div className="search">
            <img src="/assets/search.svg" alt="search"/>
            <input type="text" placeholder="Search..."/>
          </div>
        </div>
        <div className="sneakers-cards d-flex justify-between mt-40">
          {
            arr.map( card =>
              <Card card={card} onClick={() => console.log(card)}/>
            )
          }

          {/*<div className="card">*/}
          {/*  <div className="favourite">*/}
          {/*    <img src="/assets/btn-heart-regular.svg" alt="Add to favourite"/>*/}
          {/*  </div>*/}
          {/*  <img height={112} src="/assets/sneakers/1.jpg" alt="sneaker-1"/>*/}
          {/*  <h5>Men`s sneakers Nike Blazer Mid Suede</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Cost: </span>*/}
          {/*      <b>120$</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <img width={11} height={11} src="/assets/plus.svg" alt="add"/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="card">*/}
          {/*  <img width={133} height={112} src="/assets/sneakers/2.jpg" alt="sneaker-1"/>*/}
          {/*  <h5>Men`s sneakers Nike Blazer Mid Suede</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Cost: </span>*/}
          {/*      <b>120$</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <img width={11} height={11} src="/assets/plus.svg" alt="add"/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="card">*/}
          {/*  <img width={133} height={112} src="/assets/sneakers/3.jpg" alt="sneaker-1"/>*/}
          {/*  <h5>Men`s sneakers Nike Blazer Mid Suede</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Cost: </span>*/}
          {/*      <b>120$</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <img width={11} height={11} src="/assets/plus.svg" alt="add"/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="card">*/}
          {/*  <img width={133} height={112} src="/assets/sneakers/4.jpg" alt="sneaker-1"/>*/}
          {/*  <h5>Men`s sneakers Nike Blazer Mid Suede</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Cost: </span>*/}
          {/*      <b>120$</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <img width={11} height={11} src="/assets/plus.svg" alt="add"/>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;

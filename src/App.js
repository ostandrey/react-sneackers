function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center" >
          <img width={40} height={40} src="/assets/logo.svg" alt='logo'/>
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p>Shop of the Best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/assets/basket.svg" alt='basket'/>
            <span>120 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/assets/favourites.svg" alt='favourites'/>
          </li>
          <li>
            <img width={18} height={18} src="/assets/profile.svg" alt='profile'/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>All Sneakers</h1>
        <div className="sneakers-cards d-flex justify-between mt-40">
          <div className="card">
            <img height={112} src="/assets/sneakers/1.jpg" alt="sneaker-1"/>
            <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost: </span>
                <b>120$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/assets/plus.svg" alt="add"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/assets/sneakers/2.jpg" alt="sneaker-1"/>
            <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost: </span>
                <b>120$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/assets/plus.svg" alt="add"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/assets/sneakers/3.jpg" alt="sneaker-1"/>
            <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost: </span>
                <b>120$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/assets/plus.svg" alt="add"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/assets/sneakers/4.jpg" alt="sneaker-1"/>
            <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Cost: </span>
                <b>120$</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/assets/plus.svg" alt="add"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

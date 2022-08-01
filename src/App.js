function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src={process.env.PUBLIC_URL + '/img/logo.png'}
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop of the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src={process.env.PUBLIC_URL + '/img/cart.svg'} />
            <span>1205 uah</span>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + '/img/user.svg'} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src={process.env.PUBLIC_URL + '/img/sneakers/1.jpg'}
              alt="Sneakers"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 7 700 uah</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src={process.env.PUBLIC_URL + '/img/plus.svg'}
                  alt="Plus"
                />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src={process.env.PUBLIC_URL + '/img/sneakers/2.jpg'}
              alt="Sneakers"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 7 700 uah</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src={process.env.PUBLIC_URL + '/img/plus.svg'}
                  alt="Plus"
                />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src={process.env.PUBLIC_URL + '/img/sneakers/3.jpg'}
              alt="Sneakers"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 7 700 uah</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src={process.env.PUBLIC_URL + '/img/plus.svg'}
                  alt="Plus"
                />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src={process.env.PUBLIC_URL + '/img/sneakers/4.jpg'}
              alt="Sneakers"
            />
            <h5>Men's sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b> 7 700 uah</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src={process.env.PUBLIC_URL + '/img/plus.svg'}
                  alt="Plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

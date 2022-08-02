function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping cart{' '}
          <img
            className="remove-btn cu-p"
            src={process.env.PUBLIC_URL + '/img/btn-remove.svg'}
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/sneakers/2.jpg'
                })`,
              }}
              className="cart-item-img"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Men's sneakers Nike Air Max 270</p>
              <b>7 700 uah</b>
            </div>
            <img
              className="remove-btn"
              src={process.env.PUBLIC_URL + '/img/btn-remove.svg'}
              alt="Remove"
            />
          </div>

          <div className="cart-item d-flex align-center">
            <div
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + '/img/sneakers/4.jpg'
                })`,
              }}
              className="cart-item-img"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Sneakers Puma X Aka Boku Future Rider</p>
              <b>5 514 uah</b>
            </div>
            <img
              className="remove-btn"
              src={process.env.PUBLIC_URL + '/img/btn-remove.svg'}
              alt="Remove"
            />
          </div>
        </div>

        <div className="cart-total-block">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>13 214.00 uah</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>660.70 uah</b>
            </li>
          </ul>
          <button className="green-button">
            Checkout{' '}
            <img src={process.env.PUBLIC_URL + '/img/arrow.svg'} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping cart{' '}
          <img
            onClick={onClose}
            className="remove-btn cu-p"
            src={process.env.PUBLIC_URL + '/img/btn-remove.svg'}
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cart-item d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: `url(${obj.imageUrl})`,
                }}
                className="cart-item-img"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} uah</b>
              </div>
              <img
                className="remove-btn"
                src={process.env.PUBLIC_URL + '/img/btn-remove.svg'}
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <div className="cart-total-block">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>13 600.00 uah</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>680.00 uah</b>
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

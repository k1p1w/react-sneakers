function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping cart{' '}
          <img
            onClick={onClose}
            className="remove-btn cu-p"
            src={'/react-sneakers/img/btn-remove.svg'}
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
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
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    src={'/react-sneakers/img/btn-remove.svg'}
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
                <img src={'/react-sneakers/img/arrow.svg'} alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div class="cart-empty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              height="120px"
              src="/react-sneakers/img/empty-cart.jpg"
              alt="empty-cart"
            />
            <h2>The cart is empty</h2>
            <p class="opacity-6">
              Add at least one pair of sneakers to make an order.
            </p>
            <button onClick={onClose} class="green-button">
              <img src="/react-sneakers/img/arrow.svg" alt="Arrow" />
              come back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;

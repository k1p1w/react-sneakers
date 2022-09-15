import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={'/react-sneakers/img/logo.png'} />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop of the best sneakers</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="/react-sneakers/img/cart.svg"
            alt="Cart"
          />
          <span>0 uah</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/react-sneakers/img/heart.svg"
              alt="Bookmarks"
            />
          </Link>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/react-sneakers/img/user.svg"
            alt="User"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;

function Header(props) {
  return (
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
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src={process.env.PUBLIC_URL + '/img/cart.svg'}
          />
          <span>0 uah</span>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src={process.env.PUBLIC_URL + '/img/user.svg'}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;

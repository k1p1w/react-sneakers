function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src={process.env.PUBLIC_URL + '/img/unliked.svg'} alt="Unliked" />
      </div>
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
  );
}

export default Card;

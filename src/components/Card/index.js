import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={process.env.PUBLIC_URL + '/img/unliked.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} uah</b>
        </div>
        <button className="button" onClick={props.onClick}>
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

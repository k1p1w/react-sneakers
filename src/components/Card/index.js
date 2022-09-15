import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onFavorite, onPlus, favorited }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={
            isFavorite
              ? '/react-sneakers/img/liked.svg'
              : '/react-sneakers/img/unliked.svg'
          }
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} uah</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={
            isAdded
              ? '/react-sneakers/img/btn-checked.svg'
              : '/react-sneakers/img/btn-plus.svg'
          }
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;

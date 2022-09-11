import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: "Men's sneakers Nike Blazer Mid Suede",
    price: 7700,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/1.jpg',
  },
  {
    title: "Men's sneakers Nike Air Max 270",
    price: 8400,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/2.jpg',
  },
  {
    title: "Men's sneakers Nike Blazer Mid Suede",
    price: 7700,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/3.jpg',
  },
  {
    title: 'Sneakers Puma X Aka Boku Future Rider',
    price: 5200,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/4.jpg',
  },
  {
    title: "Men's sneakers Under Armour Curry 8",
    price: 9300,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/5.jpg',
  },
  {
    title: "Men's sneakers Nike Kyrie 7",
    price: 6900,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/6.jpg',
  },
  {
    title: "Men's sneakers Jordan Air Jordan 11",
    price: 6600,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/7.jpg',
  },
  {
    title: "Men's sneakers Nike Lebron XVIII",
    price: 10100,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/8.jpg',
  },
  {
    title: "Men's sneakers Nike Lebron XVIII Low",
    price: 8600,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/9.jpg',
  },
  {
    title: "Men's sneakers Nike Kyrie Flytrap IV",
    price: 6900,
    imageUrl: process.env.PUBLIC_URL + '/img/sneakers/10.jpg',
  },
];

function App() {
  //   const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  //   React.useEffect(() => {
  //     fetch('https://6313a763a8d3f673ffce925d.mockapi.io/items')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((json) => {
  //         setItems(json);
  //       });
  //   }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Search by request: "${searchValue}"`
              : 'All sneakers'}
          </h1>
          <div className="search-block d-flex">
            <img
              src={process.env.PUBLIC_URL + '/img/search.svg'}
              alt="Search"
              item
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src={process.env.PUBLIC_URL + '/img/btn-remove.svg'}
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search...."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {arr
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Added to the bookmarks')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

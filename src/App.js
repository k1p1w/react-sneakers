import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const array = [
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
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img
              src={process.env.PUBLIC_URL + '/img/search.svg'}
              alt="Search"
            />
            <input placeholder="Search...." />
          </div>
        </div>
        <div className="d-flex">
          {array.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

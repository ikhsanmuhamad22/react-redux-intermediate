import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_DATA = [
  {
    id: 1,
    title: 'book 1',
    price: 5,
    description: 'this is my first book',
  },
  {
    id: 2,
    title: 'book 2',
    price: 10,
    description: 'this is my second book',
  },
  {
    id: 3,
    title: 'book 3',
    price: 15,
    description: 'this is my third book',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

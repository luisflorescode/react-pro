import { useState } from 'react';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/product-interfaces';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: '/coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: '/coffee-mug2.png',
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export default function ShoppingPage() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = () => {
    console.log('Hello');
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={() => onProductCountChange()}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ width: '100px' }}
          onChange={() => onProductCountChange()}
        >
          <ProductImage
            className="custom-image"
            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
          />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: '100px' }}
        >
          <ProductImage
            className="custom-image"
            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
          />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
}

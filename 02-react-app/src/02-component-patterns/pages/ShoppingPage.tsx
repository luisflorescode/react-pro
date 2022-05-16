import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: '/coffee-mug.png',
};

export default function ShoppingPage() {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hello, word" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

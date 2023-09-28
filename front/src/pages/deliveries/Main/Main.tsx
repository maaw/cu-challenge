import { FC } from 'react';
import { SubHeader } from './SubHeader/SubHeader';

export const Main: FC = () => {
  return (
    <main className="page__main">
      <SubHeader />
      <div className="products-grid page__horizontal-space page__vertical-space">
        <div className="product-card" data-test-id="product-card">
          <h2>Product 1</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <p>$100</p>
          <img
            src="https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg"
            alt="Product 1"
          />
        </div>
        <div className="product-card" data-test-id="product-card">
          <h2>Product 2</h2>
          <p>Lorem the industry's standard dummy text ever since the 1500s.</p>
          <p>$200</p>
          <img
            src="https://cookunity-media.imgix.net/media/catalog/product/cache/x1200/l/a/large-chicken_schnitzel_-_ratel.jpeg"
            alt="Product 2"
          />
        </div>
      </div>
    </main>
  );
};

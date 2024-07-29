




import React, { useState, useEffect } from 'react';

import styles from './BikeCards.module.css';

import { renderImage } from '../FiltersComponent/FilterServices';
import Product from '../Interfaces/ProductInterface';


const RenderAllBikes: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://challenges.brainster.tech/ajax_data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-9">
      <div className="row d-flex justify-content-center">
        {products.map((product: Product, index: number) => (
          <div className={`col-3 ${styles.bike_card}`} key={index}>
            {/* Render image */}
            <div className={styles.bike_image}>
              {renderImage(parseInt(product.image), '.png')}
            </div>
            {/* Render content */}
            <div className={styles.bike_content}>
              <h5>{product.name}</h5>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderAllBikes;








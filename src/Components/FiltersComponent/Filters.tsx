

import React, { useState, useEffect } from 'react';
import styles from './Filter.module.css';
import {renderImage, filterByGender, filterByBrand } from './FilterServices'; 


import Product from '../Interfaces/ProductInterface';


const Filter: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://challenges.brainster.tech/ajax_data/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleFilterByBrand = (brand: string) => {
    setSelectedBrand(selectedBrand === brand ? '' : brand);
    setSelectedGender(''); // Reset selected gender
    setFilteredProducts(filterByBrand(products, brand));
  };
  
  const handleFilterByGender = (gender: string) => {
    setSelectedGender(selectedGender === gender ? '' : gender);
    setSelectedBrand(''); // Reset selected brand
    setFilteredProducts(filterByGender(products, gender));
  };
 

  return (<>
  <h1>Bikes</h1>
 
    <div className="col-3">
    <h3>Filter By:</h3>
 
   
      <div
  className={`d-flex justify-content-between align-items-center  ${styles.mouse_pointer} ${selectedBrand === 'show all' ? styles.selected_filter : ''}`}
  onClick={() => {
    setSelectedBrand(selectedBrand === 'show all' ? '' : 'show all');
    setFilteredProducts(products);
  }}>
  <p
    className={` ${styles.mouse_pointer} ${selectedBrand === 'show all' ? styles.selected_brand_text : ''}`}
    style={{ color: selectedBrand === 'show all' ? 'orange' : 'inherit' }}>
    Show All
  </p>
  <span className={`badge bg-secondary ${selectedBrand === 'show all' ? styles.selected_badge : ''}`}>63</span>
</div>

      <hr />
    
      <h4>Gender</h4>
<div className="d-flex justify-content-between align-items-center">
  <p
    onClick={() => handleFilterByGender('MALE')}
    className={` ${styles.mouse_pointer} ${selectedGender === 'MALE' ? styles.selected_filter : ''}`}
    style={{ color: selectedGender === 'MALE' ? 'orange' : 'inherit' }}>
    Male
  </p>
  <span className={`badge bg-secondary ${selectedGender === 'MALE' ? styles.selected_badge : ''}`}>7</span>
</div>
<div className="d-flex justify-content-between align-items-center">
  <p
    onClick={() => handleFilterByGender('FEMALE')}
    className={` ${styles.mouse_pointer} ${selectedGender === 'FEMALE' ? styles.selected_filter : ''}`}
    style={{ color: selectedGender === 'FEMALE' ? 'orange' : 'inherit' }}>
    Female
  </p>
  <span className={`badge bg-secondary ${selectedGender === 'FEMALE' ? styles.selected_badge : ''}`}>7</span>
</div>

      <hr />

      {/* Brand filter */}
      <h4>Brand</h4>
    

    <div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'LE GRAND BIKES' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('LE GRAND BIKES')} >
  <p style={{ color: selectedBrand === 'LE GRAND BIKES' ? 'orange' : 'inherit' }}>LE GRAND BIKES</p>
  <span className={`badge bg-secondary ${selectedBrand === 'LE GRAND BIKES' ? styles.selected_badge : ''}`}>7</span>
</div>
   

<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer} 
  ${selectedBrand === 'KROSS' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('KROSS')}>
  <p style={{ color: selectedBrand === 'KROSS' ? 'orange' : 'inherit' }}>KROSS</p>
  <span className={`badge bg-secondary ${selectedBrand === 'KROSS' ? styles.selected_badge : ''}`}>7</span>
</div>
   

<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'EXPLORER' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('EXPLORER')}>
  <p style={{ color: selectedBrand === 'EXPLORER' ? 'orange' : 'inherit' }}>EXPLORER</p>
  <span className={`badge bg-secondary ${selectedBrand === 'EXPLORER' ? styles.selected_badge : ''}`}>7</span>
</div>
<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'VISITOR' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('VISITOR')}>
  <p style={{ color: selectedBrand === 'VISITOR' ? 'orange' : 'inherit' }}>VISITOR</p>
  <span className={`badge bg-secondary ${selectedBrand === 'VISITOR' ? styles.selected_badge : ''}`}>7</span>
</div>
<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'PONY' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('PONY')}>
  <p style={{ color: selectedBrand === 'PONY' ? 'orange' : 'inherit' }}>PONY</p>
  <span className={`badge bg-secondary ${selectedBrand === 'PONY' ? styles.selected_badge : ''}`}>2</span>
</div>
<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'FORCE' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('FORCE')}>
  <p style={{ color: selectedBrand === 'FORCE' ? 'orange' : 'inherit' }}>FORCE</p>
  <span className={`badge bg-secondary ${selectedBrand === 'FORCE' ? styles.selected_badge : ''}`}>7</span>
</div>
<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'E-BIKE' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('E-BIKE')}>
  <p style={{ color: selectedBrand === 'E-BIKE' ? 'orange' : 'inherit' }}>E-BIKE</p>
  <span className={`badge bg-secondary ${selectedBrand === 'E-BIKE' ? styles.selected_badge : ''}`}>7</span>
</div>
<div className={`d-flex justify-content-between align-items-center ${styles.mouse_pointer}
  ${selectedBrand === 'IDEAL' ? styles.selected_filter : ''}`}
  onClick={() => handleFilterByBrand('IDEAL')}>
  <p style={{ color: selectedBrand === 'IDEAL' ? 'orange' : 'inherit' }}>IDEAL</p>
  <span className={`badge bg-secondary ${selectedBrand === 'IDEAL' ? styles.selected_badge : ''}`}>7</span>
</div>
    </div>
    
    <div className={`col-9 ${styles.bike_container}`}>
      
   <div className={`row ${styles.card_container}`}>
   {filteredProducts.map((product: Product, index: number) => (
       <div className={`col-4 ${styles.bike_card}`} key={index}>
        {/* Render image */}
      <div className={styles.bike_image}>
           {renderImage(parseInt(product.image), 'png')}
         </div>
         {/* Render content */}
        <div className={styles.bike_content}>
          <h5>{product.name}</h5>
          <p> ${product.price}</p>
        </div>
       </div>
      ))}
   </div>
    </div> 
  
    </>
     
  );
     
};

export default Filter;
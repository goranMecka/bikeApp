import Product from "../Interfaces/ProductInterface";



export const renderImage = 
(imgId: number, imgFormat: string = 'png') => 

<img src={`./public/images/${imgId}.${imgFormat}`} alt=''/>






  
  export const filterByGender = (products: Product[], gender: string): Product[] => {
    return gender ? products.filter((product) => product.gender === gender) : products;
  };
  
  export const countBikesByGender = (products: Product[], gender: string): number => {
    return products.filter((product) => product.gender === gender).length;
  };


  export const filterByBrand = (products: Product[], brand: string): Product[] => {
    return brand ? products.filter(product => product.brand === brand) : products;
  };

  export const toggleSelection = (current: string, selected: string): string => {
    return current === selected ? '' : selected;
  };
 
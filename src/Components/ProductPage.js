import React from 'react';
import Card from './Card';

import img1 from '../assets/shirt.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';



const ProductPage = () => {
  return (
    <div className='product__page'>
    <h5>PRODUCTS</h5>

    <div className="grid__product__page">
        <Card productImage={img1} productName={"T.shirt"} productPrice={"$9"}/>
        <Card productImage={img2} productName={"Glasses"} productPrice={"$12"}/>
        <Card productImage={img3} productName={"Jordan"} productPrice={"$20"}/>
        <Card productImage={img4} productName={"Hills"} productPrice={"$18"}/>
        <Card productImage={img5} productName={"Samsung TV"} productPrice={"$299"}/>
        <Card productImage={img6} productName={"Nike"} productPrice={"$60"}/>
        
    </div>
    </div>
  )
}

export default ProductPage
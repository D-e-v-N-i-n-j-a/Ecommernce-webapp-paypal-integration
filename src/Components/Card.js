import React,{useRef,useContext} from 'react';
import CartContext from '../context/CardProvider';
import Button from 'react-bootstrap/Button';

const Card = ({productImage,productPrice,productName}) => {
  const {addToCart} = useContext(CartContext);
  const name = useRef(null);
  const price = useRef(null);
  const img = useRef(null);

  return (
    <div className='product__card'>
        <span className='product_span'>free shipping</span>
        <div className="product__info">
            <img ref={img} src={productImage} alt="" />
            <div className="product__ctx">
            <span ref={name}>{productName}</span>
            <span ref={price}>{productPrice}</span>
            <Button variant="success" onClick={()=>{addToCart(Date.now(),name.current.innerText,price.current.innerText,img.current.src)}}>Add to cart</Button>
            </div>
        </div>
    </div>
  )
}


export default Card;
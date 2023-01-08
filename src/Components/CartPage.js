import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import VerticalModel from './VerticalModel';
import Nav from './Nav';
import CartContext from '../context/CardProvider';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { items,total,increments,productIncrements,productDecrements} = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [modalShow, setModalShow] = React.useState(false);
  const {removeCart} = useContext(CartContext)
  const navigate = useNavigate();


  // DECREMENTS
  function decrements() {
    if (quantity === 1) return alert('cannot proceed');
    setQuantity(quantity - 1)

  }

  return (
    <div>
      <Nav />
      <div className="cart__page__container">
        <h1>Products</h1>
       {items.length !== 0 ?  <div className="grid-product">
          {items.map((item, index) => (
            <div className="product--ctx" key={index}>
              <div className='product--image--name'>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </div>
              <div className="product--price">
                <span>{item.price}</span>
              </div>
              <div className="add-quantity">
                <Button variant="primary" onClick={()=>{productIncrements(item)}}>+</Button>
                <span>{increments}</span>
                <Button variant="primary" onClick={()=>{productDecrements(item)}}> - </Button>
              </div>
              <div className="remove-cart">
                <Button variant="danger" onClick={()=>{removeCart(item)}}>Remove</Button>
              </div>
            </div>
          ))}
            <div variant="success" className="cart-total p-3 mt-5">
              <span>Total: ${total}</span>
            </div>

          {/* PROCEED TO CHECKOUT */}
          <div className="d-flex mx-auto mt-5">
            <Button className='mx-2' variant="primary" size="lg" onClick={()=>{navigate("/")}}>Continue Shopping</Button>
            <Button variant="danger" size="lg" onClick={() => setModalShow(true)}>Proceed to checkout</Button>
          </div>
        </div> : <span>Your cart is empty</span> }
        <VerticalModel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>

    </div>
  )
}

export default CartPage;
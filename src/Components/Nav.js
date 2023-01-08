import React,{useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import CartContext from '../context/CardProvider';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  const {items} = useContext(CartContext)
  return (
    <nav>
        <div className="nav-container">
        <div className="logo">
            <h1>Shoppy</h1>
        </div>
        <div className="shopping-cart" onClick={()=>{navigate("/cart-page")}}>
            <AiOutlineShoppingCart className='shopping__cart'/>
            <span className='product__counter'>{items.length}</span>
        </div>
        </div>

    </nav>
  )
}

export default Nav
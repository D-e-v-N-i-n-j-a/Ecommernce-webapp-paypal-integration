import { useState,createContext } from "react";

const CartContext = createContext();

// ADD TO CART
export function CartProvider ({children}){
    const [items,setItem] = useState([]);
    const [total,setTotal] = useState(0);
    const [increments,setIncrements] = useState(1)
   
    

    const addToCart = (id,name,price,image)=>{
        setItem((prevSate)=>[...prevSate,{id,name,price,image}]);
        const sliceTotal = price.replace("$","").trim();
        const calculateTotal = Number.parseInt(sliceTotal) + total;
        setTotal(calculateTotal);
        console.log(total);
        
    }

    // REMOVE CART
    const removeCart = (item)=>{
        setItem(items.filter((c) => c !== item));
        const slicePrice = item.price.replace("$","").trim();
        const calc = total  - Number.parseInt(slicePrice);
        setTotal(calc);
    }
    const productIncrements=(item)=>{
        setIncrements(increments + 1)
        const calc = increments * Number.parseInt(item.price.replace("$","").trim());
        setTotal(calc + total)
    }


    const productDecrements=(item)=>{
        setIncrements(increments - 1);
        if(increments === 1) return setIncrements(1)
        setTotal(total - Number.parseInt(item.price.replace("$","").trim()))
     
    }

    return (
        <CartContext.Provider value={{total,items,increments,addToCart,removeCart,productIncrements,productDecrements}}>{children}</CartContext.Provider>
    );
}




export default CartContext;
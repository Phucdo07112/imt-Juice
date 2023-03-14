import React, { createContext, useState } from 'react'
import { data } from '../data/data';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i <= data.Juice.length ; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = data.Juice.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
    };

    const getquantity = () => {
        let quantity = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                quantity += cartItems[item]
            }
        }
        return quantity;
    }


    const addToCart = (itemId, e) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        if(e) {    
            e.preventDefault();
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        if(Number(newAmount)) {
            setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
        }
    };

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getquantity}
    console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
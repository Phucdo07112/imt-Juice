import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import CartItem from '../components/CartItem/CartItem';
import { ShopContext } from '../context/shop-context'
import { data } from '../data/data'
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);    
    const totalAmount = getTotalCartAmount();

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    const navigate = useNavigate();
  return (
    <section>
        <div className='container section'>
            <div className='shopCart'>
                <div>
                    <h1 className='juice-header-title'>Your Cart Items</h1>
                </div>
                <div className='cartItems'>
                    {
                        data.Juice.map((product) => cartItems[product.id] !== 0 ? 
                            (<CartItem data={product} key={product.id}/>)
                            : ('')      
                        )
                    }
                </div>
                {totalAmount > 0 ? (
                    <div className='checkout'>
                        <h2>Subtotal: Rp.{totalAmount}</h2>
                        <div className='btn-checkout'>
                            <button onClick={() => navigate('/')}>Continue Shopping</button>
                            <button> Checkout </button>
                        </div>
                    </div>
                ): (
                    <h2 className='Empty'>Your Cart is Empty !</h2>
                )}
            </div>
        </div>
    </section>
  )
}

export default Cart
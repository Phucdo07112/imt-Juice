import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './CartItem.scss'

const CartItem = (props) => {
    const {id, name, price, image} = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={image} alt="Juice" className='cartItem-img'/>
        <div className='carDes'>
            <h2 className='desName'>
                {' '}
                {name}
            </h2>
            <div className='countHandler'>
                <h4 className='desPrice'>Rp.{price}</h4>
                <button className='count-prev' onClick={() => removeFromCart(id)}> - </button>
                <input
                    className='count-input'
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(e.target.value, id)}
                    
                />
                <button className='count-next' onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
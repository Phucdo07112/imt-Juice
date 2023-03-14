import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiMentalHealthLine } from 'react-icons/ri'
import { CiUmbrella } from 'react-icons/ci'
import { useParams } from 'react-router-dom'
import { data } from '../data/data';
import { ShopContext } from '../context/shop-context';

const Product = () => {
  const { cartItems,updateCartItemCount } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const product = data.Juice[id - 1]
  const ingredient = product.ingredient
  useEffect(() => {
    window.scrollTo(0,0);
    setQuantity(cartItems[product.id])
  },[cartItems,product])

 
  return (
    <section>
      <div className='container section'>
        <div className='product'>
          <div className='product-content'>
            <div className='content-left'>
              <h2>{product.name}</h2>
              <div className='content-quantity'>
                <button className='quantity-prev' onClick={() => setQuantity(prev => prev > 0 ? prev - 1 : prev)}> - </button>
                <div className='quantity-num'>{quantity}</div>
                <button className='quantity-next' onClick={() => setQuantity(prev => prev + 1)}> + </button>
              </div>
              <button className='btn-buy' onClick={() => updateCartItemCount(quantity, product.id)}>
                <AiOutlineShoppingCart className='cart-icon'/>
                Buy Now
              </button>
            </div>
            <div className='content-main'>
              <img src={product.image} alt="Juice" />
            </div>
            <div className='content-right'>
              <div className='content-right-item'>
                <div className='content-right-icon'>
                  <RiMentalHealthLine />
                </div>
                <div className='content-right-text'>
                  <h2>Vitamin</h2>
                  <p>increased Vitamins and Minerals in Your Diot</p>
                </div>
              </div>
              <div className='content-right-item'>
                <div className='content-right-icon'>
                  <AiOutlineCalendar />
                </div>
                <div className='content-right-text'>
                  <h2>Weight Loss</h2>
                  <p>Potontial Weight Loss and incroasod Enorgy</p>
                </div>
              </div>
              <div className='content-right-item'>
                <div className='content-right-icon'>
                  <CiUmbrella />
                </div>
                <div className='content-right-text'>
                  <h2>Protect</h2>
                  <p>Decrease inflammation and Roset Your Body</p>
                </div>
              </div>
            </div>
          </div>
          <div className='product-footer'>
            {ingredient.map((item) => (
              <div className='ingredient' key={item.id}>
                <div className='ingredient-img' style={{backgroundColor: `${item.color}`}}>
                  <img src={item.image} alt="" />
                </div>
                <h2>{item.fluit}</h2>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
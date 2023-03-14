import { useContext } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import './JuiceItem.scss'
const JuiceItem = ({ data }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <Link to={`/product/`+ data.id} >
      <div className='box-item'>
        <img className='juice-img' src={data.image} alt='juice' />
        <div className='juice-center'>
          <h2 className='juice-title'>{data.name}</h2>
          <p className='juice-des'>{data.des}</p>
          <div className='juice-sell'>
              <h3 className='juice-price'>Rp.{data.price}</h3>
              <div className='juice-add' onClick={(e) => addToCart(data.id,e)}>
                <IoAddCircleSharp />
              </div>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default JuiceItem
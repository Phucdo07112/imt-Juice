import { useContext, useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import './Header.scss';

const Header = () => {
  const { getquantity } = useContext(ShopContext)
  const [ btnSearch, setBtnSearch] = useState(false)
  const [ search, setSearch ] = useState('')
  const navigate = useNavigate();
  const quantity = getquantity()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`)

  }
  return (
    <header className="header">
      <div className='container header-center'>
            <Link to='/'>
              <h1 className='header-title'>Fresh Pressed Juice</h1>
            </Link>
            <form className='search' onSubmit={handleSearch}>
              <input type="text" className='search-input' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Juice"/>
                <Tippy
                  content="Search"
                >
                  <button type='submit' className='search-icon'>
                    <AiOutlineSearch/>
                  </button>
                </Tippy>
            </form>
            <div className='flex-cart'>
              <div className='cart search-cart' onClick={() => setBtnSearch(!btnSearch)}>
                <AiOutlineSearch className='cart-icon'/>
              </div>
              <Link to='/cart'>
                <Tippy
                  content="Cart"
                >
                  <div className='cart' data-tooltip-content="Hello world!">
                    <AiOutlineShoppingCart className='cart-icon'/>
                    <span className='cart-quantity'>{quantity}</span>
                  </div>
                </Tippy>
              </Link>
            </div>
      </div>
            <form className={`search-mb ${btnSearch ? 'active' : ''}`} onSubmit={handleSearch}>
              <input type="text" className='search-input' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Juice"/>
              <button type='submit' className='search-icon'>
                <AiOutlineSearch/>
              </button>
            </form>
    </header>
  )
}

export default Header
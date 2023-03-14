
import Header from './components/Header';
import './App.scss'

import { BrowserRouter } from 'react-router-dom';
import Routers from './config/Routes';
import ShopContextProvider from './context/shop-context';

function App() {

  return (
    <ShopContextProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Routers />
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

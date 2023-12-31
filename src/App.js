import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { Home } from './pages/home/home'
import { Navbar } from './components/navbar';
import SubHeader from './components/SubHeader';
import { ShopContextProvider } from './context/shop-context';
import SearchBar from './components/SearchBar';
import { PRODUCTS } from './products'
import 'animate.css'
// above includes BrowserRouter, navbar, links # Home. shop and cart
//includes the following installs: reactstrap, mui material, phsopher-react, react-router-dom
// originally wanted to use reactstrap for SubHeader but decided to go with mui

// Below shows navbar and the routes
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <SearchBar placeholder="Search product here.." data={PRODUCTS} />
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/shop' element={< Shop />} />
            <Route path='/cart' element={< Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

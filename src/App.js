import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { shop } from './pages/shop/shop'
import { cart } from './pages/cart/cart'
import { home } from './pages/home/home'
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={< home />} />
              <Route path='/shop' element={< shop />} />
              <Route path='/cart' element={< cart />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import { Shop } from './Pages/shop/shop'
import { cart } from './Pages/cart/cart'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Router>
            <Routes>
              <Route path='/' />

              <Route path='/cart' />
            </Routes>
          </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;

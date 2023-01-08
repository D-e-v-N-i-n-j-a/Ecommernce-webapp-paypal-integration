import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import CartPage from './Components/CartPage';
import { CartProvider } from './context/CardProvider';
function App() {
  return (
   <>
    <CartProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart-page' element={<CartPage/>}/>
      </Routes>
    </Router>
    </CartProvider>
   </>
  );
}

export default App;

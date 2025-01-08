import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Collane from './pages/Collane';
import Orecchini from './pages/Orecchini';
import Piercing from './pages/Piercing';
import Cart from './components/Cart';
import ProductPage from './pages/ProductPage';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collane" element={<Collane />} />
          <Route path="/orecchini" element={<Orecchini />} />
          <Route path="/piercing" element={<Piercing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
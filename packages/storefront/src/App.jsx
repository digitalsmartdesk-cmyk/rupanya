import { HashRouter, Routes, Route } from 'react-router-dom';
import { BrandProvider } from './context/BrandContext';
import { CatalogProvider } from './context/CatalogContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Makers from './pages/Makers';

export default function App({ brand, products, collections, editEnd }) {
  return (
    <BrandProvider brand={brand}>
      <CatalogProvider products={products} collections={collections} editEnd={editEnd}>
        <CartProvider>
          <HashRouter>
            <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path={brand.nav.secondaryPath} element={<Makers />} />
              </Routes>
              <Footer />
            </div>
          </HashRouter>
        </CartProvider>
      </CatalogProvider>
    </BrandProvider>
  );
}

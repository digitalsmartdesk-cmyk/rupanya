import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useBrand } from '../context/BrandContext';
import { asset } from '../lib/asset';

const navColor = (active) => (active ? 'var(--text)' : 'var(--text-muted)');

export default function Header() {
  const { pathname } = useLocation();
  const { cartItems } = useCart();
  const brand = useBrand();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px clamp(16px,4vw,48px)',
        flexWrap: 'wrap',
        gap: 10,
        background: 'color-mix(in oklch, var(--bg) 92%, transparent)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link to="/" style={{ cursor: 'pointer', display: 'block' }}>
        <img src={asset(brand.logoSrc)} alt={brand.name} style={{ height: 52, width: 'auto', display: 'block' }} />
      </Link>
      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px clamp(14px,3vw,36px)',
          alignItems: 'center',
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 0.3,
        }}
      >
        <Link to="/" style={{ cursor: 'pointer', color: navColor(pathname === '/') }}>
          Home
        </Link>
        <Link to="/collection" style={{ cursor: 'pointer', color: navColor(pathname.startsWith('/collection') || pathname.startsWith('/product')) }}>
          {brand.nav.editLabel}
        </Link>
        <Link to={brand.nav.secondaryPath} style={{ cursor: 'pointer', color: navColor(pathname === brand.nav.secondaryPath) }}>
          {brand.nav.secondaryLabel}
        </Link>
        <Link
          to="/cart"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: navColor(pathname === '/cart' || pathname === '/checkout') }}
        >
          Bag
          <span
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 999,
              minWidth: 18,
              height: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
            }}
          >
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
}

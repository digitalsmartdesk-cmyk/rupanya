import { useNavigate } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';
import { useCart } from '../context/CartContext';
import ImageSlot from '../components/ImageSlot';

export default function Cart() {
  const navigate = useNavigate();
  const brand = useBrand();
  const { cartItems, cartSubtotal, removeFromCart } = useCart();
  const cartSubtotalLabel = '₹' + cartSubtotal.toLocaleString('en-IN');
  const { copy, typography, layout } = brand;
  const buttonBase = { textTransform: typography.buttonUppercase ? 'uppercase' : 'none', letterSpacing: typography.buttonLetterSpacing };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: 'clamp(24px,7vw,48px) clamp(20px,5vw,64px) 80px', gap: 32, maxWidth: 1000, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      <h1 style={{ fontFamily: typography.headlineFont, fontSize: 'clamp(24px,4.2vw,38px)', fontWeight: typography.headlineWeight, margin: 0 }}>{copy.bagTitle}</h1>

      {cartItems.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '80px 0' }}>
          <span style={{ fontSize: 15, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>{copy.bagEmpty}</span>
          <button
            onClick={() => navigate('/collection')}
            style={{ ...buttonBase, background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: '14px 28px', fontSize: 14, fontWeight: 600, cursor: 'pointer', borderRadius: 2 }}
          >
            {copy.browseAllCta}
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {cartItems.map((ci) => (
              <div
                key={ci.cartIndex}
                style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 18, alignItems: 'center', paddingBottom: 20, borderBottom: '1px solid var(--border)' }}
              >
                <div style={{ position: 'relative', aspectRatio: layout.imageRatio }}>
                  <ImageSlot src={ci.imgSrc} alt={ci.name} radius={4} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{ci.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>
                    {ci.collectionName} &middot; No. {ci.numberInCollection} / 8 &middot; {ci.fabric}
                  </span>
                  <span onClick={() => removeFromCart(ci.cartIndex)} style={{ fontSize: 12, color: 'var(--accent)', cursor: 'pointer', marginTop: 4 }}>
                    Remove
                  </span>
                </div>
                <span style={{ fontFamily: typography.headlineFont, fontSize: 18 }}>{ci.priceLabel}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: 24 }}>
            <h3 style={{ margin: 0, fontFamily: typography.headlineFont, fontSize: 20, fontWeight: typography.headlineWeight }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>Subtotal</span>
              <span style={{ fontWeight: 600 }}>{cartSubtotalLabel}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>Shipping</span>
              <span style={{ fontWeight: 600 }}>Complimentary</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
              <span style={{ fontWeight: 700 }}>Total</span>
              <span style={{ fontFamily: typography.headlineFont, fontWeight: 600, fontSize: 19 }}>{cartSubtotalLabel}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              style={{ ...buttonBase, background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: 15, fontSize: 14, fontWeight: 600, cursor: 'pointer', borderRadius: 2, marginTop: 6 }}
            >
              Proceed to Checkout
            </button>
            <span style={{ fontSize: 11, color: 'var(--text-faint)', textAlign: 'center', fontWeight: typography.bodyWeight }}>{copy.shipsWithCert}</span>
          </div>
        </div>
      )}
    </main>
  );
}

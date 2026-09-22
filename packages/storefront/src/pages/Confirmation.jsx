import { Navigate, useNavigate } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';
import { useCart } from '../context/CartContext';

export default function Confirmation() {
  const navigate = useNavigate();
  const brand = useBrand();
  const { lastOrder } = useCart();
  const { copy, typography } = brand;
  const buttonBase = { textTransform: typography.buttonUppercase ? 'uppercase' : 'none', letterSpacing: typography.buttonLetterSpacing };

  if (!lastOrder) return <Navigate to="/" replace />;

  const totalLabel = '₹' + lastOrder.total.toLocaleString('en-IN');

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: 'clamp(50px,7vw,100px) clamp(20px,5vw,64px)', textAlign: 'center' }}>
      <span
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--accent)',
          color: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
        }}
      >
        &#10003;
      </span>
      <h1 style={{ fontFamily: typography.headlineFont, fontSize: 'clamp(22px,4.0vw,36px)', fontWeight: typography.headlineWeight, margin: 0 }}>{copy.confirmedHeadline}</h1>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', maxWidth: 420, margin: 0, fontWeight: typography.bodyWeight, lineHeight: 1.7 }}>
        {copy.confirmedBody(lastOrder.orderNumber, totalLabel)}
      </p>
      <button
        onClick={() => navigate('/collection')}
        style={{ ...buttonBase, background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: '15px 30px', fontSize: 14, fontWeight: 600, cursor: 'pointer', borderRadius: 2, marginTop: 10 }}
      >
        {copy.continueBrowsing}
      </button>
    </main>
  );
}

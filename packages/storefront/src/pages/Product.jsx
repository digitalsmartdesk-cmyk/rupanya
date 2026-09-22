import { useNavigate, useParams, Link } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';
import { useCatalog } from '../context/CatalogContext';
import { useCart } from '../context/CartContext';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const brand = useBrand();
  const { editEnd, getProduct, getRelatedProducts, products } = useCatalog();
  const { addToCart } = useCart();
  const { days } = useCountdown(editEnd);
  const { copy, typography, layout } = brand;
  const accent = typography.italicAccent;

  const product = getProduct(id) || products[0];
  const related = getRelatedProducts(product);
  const daysLeftLabel = `${days} days left`;
  const thumbs = [1, 2, 3];

  const handleAddToCart = () => {
    addToCart(product.id);
    navigate('/cart');
  };

  const buttonBase = {
    textTransform: typography.buttonUppercase ? 'uppercase' : 'none',
    letterSpacing: typography.buttonLetterSpacing,
  };

  const accentHeadingStyle = (weight) => ({
    fontFamily: typography.headlineFont,
    fontWeight: accent ? 400 : weight,
    fontStyle: accent ? 'italic' : 'normal',
  });

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: 'clamp(24px,7vw,48px) clamp(20px,5vw,64px) 80px', gap: 36 }}>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>
        <Link to="/collection" style={{ cursor: 'pointer' }}>
          {copy.collectionCrumb}
        </Link>
        &nbsp;/&nbsp; {product.name}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 56, alignItems: 'start' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 16, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {thumbs.map((n) => (
              <div key={n} style={{ position: 'relative', aspectRatio: layout.thumbRatio }}>
                <ImageSlot src={product.imgSrc} alt={`Detail shot ${n} — ${product.fabric}`} radius={4} />
              </div>
            ))}
          </div>
          <div style={{ position: 'relative', aspectRatio: layout.imageRatio }}>
            <ImageSlot src={product.imgSrc} alt={product.name} radius={4} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 480 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent)' }}>
              {product.collectionName} &middot; No. {product.numberInCollection} of 8
            </span>
            <h1 style={{ ...accentHeadingStyle(typography.headlineWeight), fontSize: 'clamp(24px,4.2vw,38px)', margin: 0 }}>{product.name}</h1>
            <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>
              {product.fabric} &middot; {product.colorway} &middot; {copy.originPrefix}
              {product.origin}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: typography.headlineFont, fontSize: 'clamp(19px,3.3vw,30px)' }}>{product.priceLabel}</span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>{copy.inclusiveOfTaxes}</span>
          </div>
          {product.lowStock && (
            <div style={{ background: 'var(--lowstock-bg)', color: 'var(--accent)', fontSize: 13, fontWeight: 600, padding: '10px 14px', borderRadius: 2, width: 'fit-content' }}>
              {copy.lowStockBanner(product.stock)}
            </div>
          )}
          <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--text-body)', margin: 0, fontWeight: typography.bodyWeight }}>{product.description}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 20, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6 }}>
            {product.specs.map((row) => (
              <InfoRow key={row.label} label={row.label} value={row.value} bodyWeight={typography.bodyWeight} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <button
              onClick={handleAddToCart}
              style={{ ...buttonBase, flex: 1, background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: 16, fontSize: 14, fontWeight: 600, cursor: 'pointer', borderRadius: 2 }}
            >
              Add to Bag &mdash; {product.priceLabel}
            </button>
          </div>
          <span style={{ fontSize: 12, color: 'var(--text-faint)', fontWeight: typography.bodyWeight }}>
            {copy.closesPrefix}
            {daysLeftLabel} &middot; {copy.closesSuffix}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
            <h3 style={{ ...accentHeadingStyle(600), fontSize: 15, margin: 0 }}>{copy.theMakerHeading}</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>{product.story}</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
        <h2 style={{ ...accentHeadingStyle(600), fontSize: 26, margin: 0 }}>
          {copy.moreFromPrefix} {product.collectionName}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(150px,calc((100% - 48px)/3)),1fr))', gap: 24, maxWidth: 760 }}>
          {related.map((item) => (
            <div key={item.id} onClick={() => navigate(`/product/${item.id}`)} style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}>
              <div style={{ position: 'relative', aspectRatio: layout.imageRatio }}>
                <ImageSlot src={item.imgSrc} alt={item.name} />
                <span
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    background: 'color-mix(in oklch, var(--bg) 92%, transparent)',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '4px 9px',
                    borderRadius: 2,
                  }}
                >
                  {item.numberInCollection} / 8
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</span>
                <span style={{ fontFamily: typography.headlineFont, fontSize: 16 }}>{item.priceLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function InfoRow({ label, value, bodyWeight }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, gap: 16, textAlign: 'right' }}>
      <span style={{ color: 'var(--text-muted)', fontWeight: bodyWeight, textAlign: 'left' }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}

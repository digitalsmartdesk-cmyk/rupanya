import { useNavigate } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';
import { useCatalog } from '../context/CatalogContext';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';
import { asset } from '../lib/asset';

export default function Home() {
  const navigate = useNavigate();
  const brand = useBrand();
  const { editEnd, getFeatured } = useCatalog();
  const { parts: countdownParts } = useCountdown(editEnd);
  const featured = getFeatured();
  const { copy, typography, layout } = brand;

  const buttonBase = {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: typography.buttonLetterSpacing,
    cursor: 'pointer',
    borderRadius: 2,
    textTransform: typography.buttonUppercase ? 'uppercase' : 'none',
  };

  const heroImage = (
    <div style={{ position: 'relative', minHeight: 360, background: 'var(--surface-2)' }}>
      <ImageSlot src={asset('/images/hero-main.jpg')} alt={copy.heroPlaceholder} />
    </div>
  );

  const heroCopy = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26, padding: 'clamp(40px,7vw,80px) clamp(20px,5vw,72px)', minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
        <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{copy.heroEyebrow}</span>
      </div>
      <h1
        style={{
          fontFamily: typography.headlineFont,
          fontSize: 'clamp(40px,7.1vw,64px)',
          lineHeight: 1.05,
          fontWeight: typography.headlineWeight,
          margin: 0,
          maxWidth: 560,
        }}
      >
        {copy.heroHeadline[0]}
        <br />
        {copy.heroHeadline[1]}
        <br />
        <span style={{ fontStyle: 'italic' }}>{copy.heroHeadline[2]}</span>
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-muted-2)', maxWidth: 460, margin: 0, fontWeight: typography.bodyWeight }}>{copy.heroBody}</p>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginTop: 6 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {countdownParts.map((p) => (
            <div
              key={p.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '12px clamp(10px,2vw,16px)',
                minWidth: 'clamp(48px,12vw,64px)',
              }}
            >
              <span style={{ fontFamily: typography.headlineFont, fontSize: 28, fontWeight: 600 }}>{p.value}</span>
              <span style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: 2 }}>{p.label}</span>
            </div>
          ))}
        </div>
        <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>{copy.countdownSuffix}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 12 }}>
        <button onClick={() => navigate('/collection')} style={{ ...buttonBase, background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: '15px 30px' }}>
          {copy.heroCtaPrimary}
        </button>
        <button
          onClick={() => navigate(brand.nav.secondaryPath)}
          style={{ ...buttonBase, background: 'none', color: 'var(--text)', border: '1px solid var(--border-strong)', padding: '15px 26px' }}
        >
          {copy.heroCtaSecondary}
        </button>
      </div>
    </div>
  );

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
          gap: 0,
          alignItems: 'stretch',
          minHeight: layout.heroMinHeight,
          borderBottom: '1px solid var(--border)',
        }}
      >
        {layout.heroImageFirst ? (
          <>
            {heroImage}
            {heroCopy}
          </>
        ) : (
          <>
            {heroCopy}
            {heroImage}
          </>
        )}
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 28, padding: 'clamp(36px,7vw,72px) clamp(20px,5vw,64px) 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
          <h2 style={{ fontFamily: typography.headlineFont, fontSize: 'clamp(21px,3.8vw,34px)', fontWeight: typography.headlineWeight, margin: 0 }}>
            {copy.sectionTwoTitle}
          </h2>
          <a onClick={() => navigate('/collection')} style={{ fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
            {copy.sectionTwoLink} &rarr;
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(240px,calc((100% - 64px)/3)),1fr))', gap: 32 }}>
          {copy.valueCards.map((card, i) => (
            <ValueCard key={card.title} brand={brand} number={card.number ?? String(i + 1).padStart(2, '0')} title={card.title} accentTitle={!!copy.valueCardsAccented}>
              {card.body}
            </ValueCard>
          ))}
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 'clamp(8px,7vw,16px) clamp(20px,5vw,64px) 72px' }}>
        <h2 style={{ fontFamily: typography.headlineFont, fontSize: 'clamp(21px,3.8vw,34px)', fontWeight: typography.headlineWeight, margin: 0 }}>{copy.fromThisEdit}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(max(150px,calc((100% - 80px)/5)),1fr))', gap: 20 }}>
          {featured.map((item) => (
            <div key={item.id} onClick={() => navigate(`/product/${item.id}`)} style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}>
              <div style={{ position: 'relative', aspectRatio: layout.imageRatio }}>
                <ImageSlot src={item.imgSrc} alt={`${item.name} — ${item.colorway}`} />
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
                    letterSpacing: 0.3,
                  }}
                >
                  {item.numberInCollection} / 8
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 11, letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 700, color: 'var(--accent)' }}>{item.collectionName}</span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{item.name}</span>
                <span style={{ fontFamily: typography.headlineFont, fontSize: 17, marginTop: 4 }}>{item.priceLabel}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/collection')}
          style={{ ...buttonBase, alignSelf: 'center', marginTop: 20, background: 'none', color: 'var(--text)', border: '1px solid var(--border-strong)', padding: '14px 32px' }}
        >
          {copy.viewAllCta}
        </button>
      </section>
    </main>
  );
}

function ValueCard({ brand, number, title, children, accentTitle }) {
  const { typography } = brand;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        ...(accentTitle ? { paddingTop: 22, borderTop: '1px solid var(--border)' } : {}),
      }}
    >
      {accentTitle ? (
        <span style={{ fontFamily: typography.headlineFont, fontSize: 20, fontStyle: 'italic', color: 'var(--accent)' }}>{title}</span>
      ) : (
        <>
          <span style={{ fontFamily: typography.headlineFont, fontSize: 22, fontStyle: 'italic' }}>{number}</span>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{title}</h3>
        </>
      )}
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', fontWeight: typography.bodyWeight }}>{children}</p>
    </div>
  );
}

import { useBrand } from '../context/BrandContext';
import { useCatalog } from '../context/CatalogContext';
import ImageSlot from '../components/ImageSlot';
import { asset } from '../lib/asset';

export default function Makers() {
  const brand = useBrand();
  const { getCollectionsGrouped } = useCatalog();
  const collectionsGrouped = getCollectionsGrouped();
  const { copy, typography } = brand;
  const accent = typography.italicAccent;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', minHeight: 480, borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: 'clamp(36px,7vw,72px) clamp(20px,5vw,64px)', minWidth: 0 }}>
          <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{copy.makersEyebrow}</span>
          <h1 style={{ fontFamily: typography.headlineFont, fontSize: 'clamp(30px,5.3vw,48px)', fontWeight: typography.headlineWeight, lineHeight: 1.1, margin: 0 }}>
            {copy.makersHeadline[0]}
            <br />
            {accent ? <span style={{ fontStyle: 'italic' }}>{copy.makersHeadline[1]}</span> : copy.makersHeadline[1]}
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-muted-2)', maxWidth: 440, margin: 0, fontWeight: typography.bodyWeight }}>{copy.makersBody}</p>
        </div>
        <div style={{ position: 'relative', minHeight: 360, background: 'var(--surface-2)' }}>
          <ImageSlot src={asset('/images/weavers-hero.jpg')} alt={copy.makersHeroPlaceholder} />
        </div>
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '0 clamp(20px,5vw,64px) 80px' }}>
        {collectionsGrouped.map((coll) => (
          <div key={coll.name} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 36, alignItems: 'center', paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3' }}>
              <ImageSlot src={coll.originImg} alt={`Photo — ${coll.name} artisans at work`} radius={4} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ margin: 0, fontFamily: typography.headlineFont, fontSize: 24, fontWeight: accent ? 400 : 600, fontStyle: accent ? 'italic' : 'normal' }}>{coll.name}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 520, fontWeight: typography.bodyWeight }}>
                {coll.tagline}. {copy.makersRowSuffix}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

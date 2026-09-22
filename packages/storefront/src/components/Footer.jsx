import { useBrand } from '../context/BrandContext';
import { useCatalog } from '../context/CatalogContext';

export default function Footer() {
  const brand = useBrand();
  const { editEnd } = useCatalog();
  const endDateLabel = editEnd.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: 'clamp(24px,7vw,48px) clamp(20px,5vw,64px)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        color: 'var(--text-faint)',
      }}
    >
      <span>
        &copy; 2026 {brand.name}. {brand.copy.footerTagline}.
      </span>
      <span>Edition closes {endDateLabel}</span>
    </footer>
  );
}

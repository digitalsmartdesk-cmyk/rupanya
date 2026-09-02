import { EDIT_END } from '../data/products';

const endDateLabel = EDIT_END.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '48px 64px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        color: 'var(--text-faint)',
      }}
    >
      <span>&copy; 2026 Aaranya. Woven in India.</span>
      <span>Edition closes {endDateLabel}</span>
    </footer>
  );
}

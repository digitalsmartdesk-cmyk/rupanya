import { createContext, useContext } from 'react';

const BrandContext = createContext(null);

export function BrandProvider({ brand, children }) {
  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within a BrandProvider');
  return ctx;
}

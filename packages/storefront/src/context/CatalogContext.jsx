import { createContext, useContext, useMemo } from 'react';

const CatalogContext = createContext(null);

export function CatalogProvider({ products, collections, editEnd, children }) {
  const value = useMemo(() => {
    const getProduct = (id) => products.find((p) => p.id === Number(id));
    const getCollectionsGrouped = () =>
      collections.map((coll, cIdx) => ({
        ...coll,
        items: products.filter((p) => p.collectionId === cIdx),
      }));
    const getRelatedProducts = (product, count = 3) =>
      products.filter((p) => p.collectionId === product.collectionId && p.id !== product.id).slice(0, count);
    const getFeatured = () => [0, 8, 16, 24, 32].map((idx) => products[idx]);

    return { products, collections, editEnd, getProduct, getCollectionsGrouped, getRelatedProducts, getFeatured };
  }, [products, collections, editEnd]);

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error('useCatalog must be used within a CatalogProvider');
  return ctx;
}

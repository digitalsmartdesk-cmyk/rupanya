export default function ImageSlot({ src, alt, radius = 0, objectPosition = 'center top' }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
        borderRadius: radius,
        display: 'block',
      }}
    />
  );
}

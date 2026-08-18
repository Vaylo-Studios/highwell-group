export default function CropMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M16 0V10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 22V32" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 16H10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 16H32" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

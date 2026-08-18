export default function RegistrationMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      style={style}
      aria-hidden
    >
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 2V14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 26V38" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 20H14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 20H38" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

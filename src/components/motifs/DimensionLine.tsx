export default function DimensionLine({
  label,
  className,
  tone = "dark",
}: {
  label?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  const line = tone === "light" ? "bg-paper/40" : "bg-border-hover";
  const tick = tone === "light" ? "bg-paper/40" : "bg-border-hover";
  const text = tone === "light" ? "text-paper/60" : "text-text-muted";

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <span className={`h-2 w-px ${tick}`} />
      <span className={`h-px flex-1 ${line}`} />
      {label ? (
        <span className={`font-spec whitespace-nowrap text-[10px] ${text}`}>
          {label}
        </span>
      ) : null}
      <span className={`h-px flex-1 ${line}`} />
      <span className={`h-2 w-px ${tick}`} />
    </div>
  );
}

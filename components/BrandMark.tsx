type BrandMarkProps = {
  compact?: boolean;
};

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand)] text-xl font-semibold text-white shadow-[0_12px_28px_rgba(8,71,68,0.18)]">
        DC
      </div>
      <div>
        <p
          className={`font-sans font-semibold tracking-tight text-[var(--brand-deep)] ${
            compact ? "text-2xl" : "text-3xl md:text-4xl"
          }`}
        >
          Digital Chitra
        </p>
        <p className="text-sm text-[var(--muted)] md:text-base">
          A digital marketing freelancer
        </p>
      </div>
    </div>
  );
}

type ExactLogoProps = {
  className?: string;
};

export default function ExactLogo({ className = "" }: ExactLogoProps) {
  return (
    <img
      src="/logo"
      alt="Digital Chitra logo"
      className={`mx-auto ${className}`}
    />
  );
}

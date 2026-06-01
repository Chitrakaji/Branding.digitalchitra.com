type ExactLogoProps = {
  className?: string;
};

export default function ExactLogo({ className = "" }: ExactLogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Digital Chitra logo"
      className={`mx-auto ${className}`}
    />
  );
}

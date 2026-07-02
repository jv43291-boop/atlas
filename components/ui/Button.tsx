interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-1";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 hover:shadow-blue-400/50",

    secondary:
      "border border-zinc-700 text-white hover:border-blue-500 hover:text-blue-400",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}
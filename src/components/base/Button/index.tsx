type ButtonProps = {
  children: string;
  onClick?: (e: any) => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

export default function Button({
  children,
  onClick,
  className,
  type,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${className} bg-black text-white font-bold text-[18px] h-[50px] px-6 rounded-[18px]`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

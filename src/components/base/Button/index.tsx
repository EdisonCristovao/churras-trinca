import SubTitle from "../SubTitle";

type ButtonProps = {
  children: string;
  onClick?: (e: any) => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${className} bg-black text-white font-bold text-[18px] h-[50px] px-6 rounded-[18px]`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

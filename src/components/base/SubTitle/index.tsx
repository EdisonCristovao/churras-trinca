type SubTitleProps = {
  children: string;
  className?: string;
};

export default function SubTitle({
  children,
  className,
  ...rest
}: SubTitleProps) {
  return <h1 className={`${className} text-xl font-bold`}>{children}</h1>;
}

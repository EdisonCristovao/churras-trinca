type CheckBoxProps = {
  className?: string;
  value: boolean;
  onClick: () => void;
};

export default function Checkbox({ className, value, onClick }: CheckBoxProps) {
  return (
    <input
      className={`${className} w-7 h-7  appearance-none border-[3px] border-[#998220] rounded-full checked:bg-[#FFD836] checked:border-[#FFD836]`}
      checked={value}
      type="checkbox"
      onClick={onClick}
    />
  );
}

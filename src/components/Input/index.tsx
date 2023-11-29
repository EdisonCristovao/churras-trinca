import SubTitle from "../subTitle";

type InputProps = {
  name: string;
  label: string;
};

export default function Input({ name, label }: InputProps) {
  return (
    <div className="flex flex-col mb-5">
      <SubTitle className="text-xl font-bold mb-2">{label}</SubTitle>
      <input
        type="text"
        className="h-[50px] rounded-[18px] px-4 focus:outline-none"
        name={name}
      ></input>
    </div>
  );
}

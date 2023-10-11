import IconArrowLong from "@/app/icons/IconArrowLong";

type LongArrowButtonProps = {
  text: string;
  width: string;
};

export default function LongArrowButton({ text, width }: LongArrowButtonProps) {
  return (
    <button
      type="button"
      style={{ width: width }}
      className={`group flex flex-nowrap items-center gap-2 rounded-88px h-10 pl-3 pr-4 py-2 font-semibold text-sm text-white bg-blue1500`}
    >
      <IconArrowLong
        height={22}
        className="group-hover:fill-blue1000 fill-white"
      />
      {text}
    </button>
  );
}

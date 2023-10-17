import IconArrowLeft from "@/app/icons/IconArrowLeft";

export default function LearnMoreLink({descriptionHeight}: {descriptionHeight?: string | number}) {
  return (
    <div
      className="hidden lg:flex items-center gap-2 text-sm font-semibold text-blue1000"
    >
      Learn more
      <IconArrowLeft className={`fill-grey470 ${descriptionHeight && 'rotate-[270deg]'}`} />
    </div>
  );
}

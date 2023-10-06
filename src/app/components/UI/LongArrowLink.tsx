import IconArrowLong from "@/app/icons/IconArrowLong";

type LongArrowLinkProps = {
  text: string;
  href: string;
  className?: string;
};

export default function LongArrowLink({
  text,
  href,
  className,
}: LongArrowLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 font-semibold text-blue1000 no-underline text-sm ${className}`}
    >
      {text}
      <IconArrowLong width={16} height={16} className="fill-current"/>
    </a>
  );
}

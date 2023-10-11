import Image from "next/image";
import MetaDate from "../UI/MetaDate";
import Tag from "../UI/Tag";

type TipsCardProps = {
  img: string;
  date: string;
  tags: string[];
  title: string;
  description: string;
};

export default function TipsCard({
  img,
  date,
  tags,
  title,
  description,
}: TipsCardProps) {
  return (
    <div className="max-w-312px md:max-w-404px overflow-hidden rounded-2xl bg-grey30 my-0 mx-auto">
      <div className="relative w-full h-60">
        <Image fill src={img} alt="Business tip" />
      </div>
      <div className="flex flex-col gap-4 w-full h-full pl-8 pr-6 pb-66px mt-8">
        <div className="flex gap-4 max-w-236px">
          <MetaDate date={date} />
          {tags.map((tag) => {
            return <Tag key={tag} type="white" text={tag} />;
          })}
        </div>
        <p className="font-semibold text-22px leading-30px -tracking-0.22px">
          {title}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

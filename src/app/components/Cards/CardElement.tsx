import Tag from "../UI/Tag";
import Image from "next/image";

export type CardElementProps = {
  data: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  };
};

export default function CardElement({ data }: CardElementProps) {
  return (
    <li
      className={`flex gap-6 pt-4 pb-6 pl-4 pr-6 max-w-404px bg-blue50 rounded-2xl hover:bg-grey30 hover:cursor-pointer`}
    >
      <div
        className={`relative min-w-[80px] h-20 bg-no-repeat bg-cover border-grey320 rounded-lg overflow-hidden`}
      >
        <Image fill src={data.logo} alt={`${data.title} logo`} sizes="" />
      </div>
      <div className="w-68 h-35">
        <div className="flex gap-2 max-w-194px">
          {data.tags.map((tag) => {
            return <Tag key={tag} type="white" text={tag} />;
          })}
        </div>
        <h3 className="font-semibold text-lg mt-2 text-black900">
          {data.title}
        </h3>
        <p className="text-sm text-black mt-4">{data.description}</p>
      </div>
    </li>
  );
}

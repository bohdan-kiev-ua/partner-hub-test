"use client";

import useWindowSize from "@/app/hooks/useWindowSize";

export type CardElementProps = {
  data: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  };
  width: { mobile: string; desktop: string };
  height: { mobile: string; desktop: string };
};

export default function CardElement({ data, width, height }: CardElementProps) {
  const windowSize = useWindowSize();  
  return (
    <li
      style={{
        width: windowSize.width >= 768 ? width.desktop : width.mobile,
        height: windowSize.width >= 768 ? height.desktop : height.mobile,
      }}
      className={`flex gap-6 pt-4 pb-6 pl-4 pr-6 bg-blue50 rounded-2xl hover:bg-grey30 hover:cursor-pointer`}
    >
      <div
        style={{ backgroundImage: `url(${data.logo})` }}
        className={`min-w-fit h-20 bg-no-repeat bg-cover border-grey320 rounded-lg`}
      ><div className="w-20"></div></div>
      <div className="w-68 h-35">
        <div className="flex gap-2">
          {data.tags.map((tag) => {
            return (
              <div
                key={tag}
                className="flex px-3 justify-center items-center text-xs rounded-88px leading-18px text-blue1000 h-18px bg-white whitespace-nowrap"
              >
                {tag}
              </div>
            );
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

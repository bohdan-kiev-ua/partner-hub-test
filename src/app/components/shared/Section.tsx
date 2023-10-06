import CardElement from "../Cards/CardElement";
import IconArrowLong from "../../icons/IconArrowLong";
import LongArrowLink from "../UI/LongArrowLink";

type SectionProps = {
  title: string;
  link: {
    href: string;
    text: string;
  };
  description: string;
  cards: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  }[];
};

export default function ({ title, link, description, cards }: SectionProps) {
  return (
    <section>
      <div className="relative">
        <div className="px-8">
          <div className="md:relative flex flex-col w-full">
            <h1 className="block max-w-fit font-semibold text-32px leading-10 -tracking-0.64px text-black900">
              {title}
            </h1>
            <LongArrowLink
              text={link.text}
              href={link.href}
              className="absolute top-full lg:top-6 right-8"
            />
            <p className="block mt-3 max-w-fit font-semibold text-black900">
              {description}
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center 2xl:justify-normal gap-30px mt-8">
          {cards.map((card) => {
            return (
              <CardElement
                key={card.id}
                data={card}
                width={{ mobile: "375px", desktop: "404px" }}
                height={{ mobile: "178px", desktop: "176px" }}
              />
            );
          })}
        </ul>
        <div className="md:hidden h-7"></div>
      </div>
    </section>
  );
}

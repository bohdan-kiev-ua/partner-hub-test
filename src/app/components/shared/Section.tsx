import CardElement from "../Cards/CardElement";
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
        <div className="flex justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30px mt-8">
          {cards.map((card) => {
            return (
              <CardElement
                key={card.id}
                data={card}
              />
            );
          })}
        </ul>
        </div>
        <div className="md:hidden h-7"></div>
      </div>
    </section>
  );
}

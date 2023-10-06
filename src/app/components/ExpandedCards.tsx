import CardElement from "./Cards/CardElement";

type ExpandedCardsProps = {
  cards: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  }[];
};

export default function ExpandedCards({ cards }: ExpandedCardsProps) {
  return (
    <section className="pt-72px">
      <ul className="flex flex-wrap justify-center gap-12">
        {cards.map((card) => {
          return (
            <CardElement
              key={card.id}
              data={card}
              width={{ mobile: "358px", desktop: "380px" }}
              height={{ mobile: "187px", desktop: "187px" }}
            />
          );
        })}
      </ul>
    </section>
  );
}

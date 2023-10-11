import CardElement from "./Cards/CardElement";
import ResultsList from "./ResultsList";
import cards from "../../data/cards.json";

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
      <ResultsList type="categoryExpanded" cards={cards} />
    </section>
  );
}

import ResultsList from "./ResultsList";
import ResultsPagination from "./ResultsPagination";
import cards from "../../data/cards.json";

export default function CategorySearchResults() {
  return (
    <section className="pt-5">
      <ResultsList cards={cards} />
      <ResultsPagination />
    </section>
  );
}

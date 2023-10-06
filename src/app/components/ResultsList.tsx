import CardElement from "./Cards/CardElement";
import cards from "../../data/cards.json";
import LongArrowLink from "./UI/LongArrowLink";

export default async function ResultsList() {
  return (
    <section className="pt-5">
      <ul className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => {
          return (
            <CardElement
              key={card.id}
              data={card}
              width={{ mobile: "375px", desktop: "404px" }}
              height={{ mobile: "179px", desktop: "176px" }}
            />
          );
        })}
      </ul>
      <div className="flex justify-end pr-6">
        <LongArrowLink
          className="flex-end lg:hidden mt-7"
          text="All POS Integrations"
          href="/"
        />
      </div>
    </section>
  );
}

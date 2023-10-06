import PostCard from "./Cards/PostCard";

export default function LearnMore() {
  return (
    <section className="pt-104px pb-20 xl:pt-216px">
      <PostCard
        backgroundColor="bg-black900"
        backgroundImage="/images/partnerCard-1.jpg"
        title="Build connected solutions for growing businesses as a Zeller Partner."
        description="Partners build integrations and connected solutions enabling merchants to accept payments in more places, reduce administrative burden, and improve operational efficiency. New integrations are regularly featured in the Zeller Partner Hub."
        button={{ text: "Learn more" }}
      />
    </section>
  );
}

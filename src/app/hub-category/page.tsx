import CategoryTitle from "../components/shared/CategoryTitle";
import SearchResults from "../components/SearchResults";
import LearnMore from "../components/LearnMore";
import MainLayout from "../layouts/MainLayout";

export default function HubCategory() {
  return (
    <>
      <MainLayout>
        <CategoryTitle
          breadcrumbs={[
            { href: "/", text: "Zeller Partner Hub" },
            { href: "hub-category", text: "Point of Sale" },
          ]}
          title="Point of Sale"
          description="Connect Zeller Terminal with your Point of Sale for seamless card
   payments."
        />
        <SearchResults />
        <LearnMore />
      </MainLayout>
    </>
  );
}

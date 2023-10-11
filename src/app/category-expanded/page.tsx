import ExpandedDescription from "../components/ExpandedDescription";
import MainLayout from "../layouts/MainLayout";
import ExpandedSearch from "../components/ExpandedSearch";
import sectionCards from "../../data/sectionCards.json";
import CategoryTitle from "../components/shared/CategoryTitle";

export default function CategoryExpanded() {
  return (
    <MainLayout type="withoutFooter">
      <CategoryTitle
        breadcrumbs={["Zeller Partner Hub", "Point of Sale"]}
        title="Point of Sale"
        description="Connect Zeller Terminal with your Point of Sale for seamless card
   payments."
      />
      <ExpandedDescription />
      <ExpandedSearch cards={sectionCards} />
    </MainLayout>
  );
}

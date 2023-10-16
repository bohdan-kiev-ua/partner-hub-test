import LearnMoreLink from "../UI/LearnMoreLink";
import Breadcrumbs from "@/app/components/UI/Breadcrumbs";

type CategoryTitleProps = {
  breadcrumbs: { href: string; text: string }[];
  title: string;
  description: string;
};

export default function CategoryTitle({
  breadcrumbs,
  title,
  description,
}: CategoryTitleProps) {
  return (
    <section className="pt-104px">
      <div className="pl-8">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="mt-5">
          <h1 className="text-3xl font-semibold tracking-wider">{title}</h1>
          <h2 className="leading-6 font-semibold mt-3.5">{description}</h2>
        </div>
        <div className="flex justify-end lg:justify-between h-12 items-center mt-1.5">
          <LearnMoreLink />
        </div>
      </div>
    </section>
  );
}

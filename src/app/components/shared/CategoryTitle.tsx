import TitleSearch from "../TitleSearch";
import LearnMoreLink from "../UI/LearnMoreLink";

type CategoryTitleProps = {
  breadcrumbs: string[];
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
        <div className="flex justify-between gap-3 max-w-fit">
          {breadcrumbs.map((crumb) => {
            return crumb !== breadcrumbs[breadcrumbs.length - 1] ? (
              <>
                <h1 className="font-semibold text-xs leading-normal text-black900">
                  {crumb}
                </h1>
                <span className="font-semibold text-xs leading-normal text-grey470">
                  /
                </span>
              </>
            ) : (
              <span
                key={crumb}
                className="font-semibold text-xs leading-normal text-grey470"
              >
                {crumb}
              </span>
            );
          })}
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-wider mt-3.5">
            {title}
          </h1>
          <h2 className="leading-6 font-semibold mt-3.5">{description}</h2>
        </div>

        <div className="flex justify-end lg:justify-between items-center mt-1.5">
          <LearnMoreLink />
          <TitleSearch />
        </div>
      </div>
    </section>
  );
}

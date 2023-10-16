import React from "react";
import Link from "next/link";

type BreadcrumbsProps = {
  breadcrumbs: { href: string; text: string }[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className="flex gap-3 max-w-fit">
      {breadcrumbs.map((crumb) => {
        return crumb !== breadcrumbs[breadcrumbs.length - 1] ? (
          <div key={crumb.text} className="flex justify-between gap-3">
            <Link
              href={crumb.href}
              className="font-semibold text-xs leading-normal text-black900"
            >
              {crumb.text}
            </Link>
            <span className="font-semibold text-xs leading-normal text-grey470">
              /
            </span>
          </div>
        ) : (
          <Link
            key={crumb.text}
            href={crumb.href}
            className="font-semibold text-xs leading-normal text-grey470"
          >
            {crumb.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

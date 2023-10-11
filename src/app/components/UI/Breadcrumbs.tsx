import React from 'react';

type BreadcrumbsProps = {
    breadcrumbs: string[]
}

const Breadcrumbs = ({breadcrumbs}: BreadcrumbsProps) => {
    return (
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
    );
};

export default Breadcrumbs;
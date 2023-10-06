"use client";

import Image from "next/image";
import CategoriesButton from "./UI/buttons/CategoriesButton";
import CategoriesDropdown from "./UI/CategoriesDropdown";
import useWindowSize from "@/app/hooks/useWindowSize";

export default function TitleSearch() {
    const windowSize = useWindowSize();
    return (
    <div className="flex gap-6 pr-8 lg:p-0">
      <div className="group relative flex items-center">
        <CategoriesButton />
      </div>

      <form>
        <label className="relative block w-12 lg:w-70 h-12">
          <input
            type="text"
            placeholder={windowSize.width >= 1024 ? "Partner" : ""}
            className="block w-full h-full pl-5 pr-5 pt-6 pb-6 m-0 text-grey550 bg-grey30"
          />
          <Image
            src="/search.svg"
            width={16}
            height={16}
            alt="Search"
            className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:right-5 lg:translate-x-0"
          />
        </label>
      </form>
    </div>
    );
}

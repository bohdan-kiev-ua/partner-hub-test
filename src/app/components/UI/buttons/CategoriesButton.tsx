import IconArrowLeft from "@/app/icons/IconArrowLeft";
import CategoriesDropdown from "../SearchDropdown";

export default function CategoriesButton() {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-blue1000 hover:cursor-pointer">
      Categories
      <IconArrowLeft className="fill-grey470 -rotate-90 group-hover/categories:-rotate-180" />
    </div>
  );
}

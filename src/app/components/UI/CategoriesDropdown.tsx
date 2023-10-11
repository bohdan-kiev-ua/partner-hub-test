import Dropdown from "./Dropdown";

type CategoriesDropdownProps = {
  categories: string[];
};

export default function CategoriesDropdown({
  categories,
}: CategoriesDropdownProps) {
  return (
    <div className="absolute top-12 right-0 hidden group-hover/categories:block">
      <Dropdown className="pt-2 pb-4 pl-6 pr-4">
        {categories.map((category) => {
          return (
            <li
              key={category}
              className="group/category-element flex items-center rounded-t h-12 hover:cursor-pointer"
            >
              <p className="text-sm group-hover/category-element:text-blue1000">{category}</p>
            </li>
          );
        })}
      </Dropdown>
    </div>
  );
}

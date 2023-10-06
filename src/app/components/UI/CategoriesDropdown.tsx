type CategoriesDropdownProps = {
  categories: {
    img: string;
    title: string;
  }[];
};

export default function CategoriesDropdown({
  categories,
}: CategoriesDropdownProps) {
  return (
    <ul className="absolute top-11 right-0 p-2 hidden group-hover:flex flex-col gap-4 rounded-2xl shadow-cardShadow pt-1 bg-white">
      {categories.map(({ img, title }) => {
        return (
          <li
            key={title}
            className="flex gap-2 items-center rounded-t w-64 hover:bg-grey320 hover:cursor-pointer whitespace-no-wrap"
          >
            <img src={img} alt={title} className="w-8 h-8" />
            <p className="font-semibold text-sm text-black900">{title}</p>
          </li>
        );
      })}
    </ul>
  );
}

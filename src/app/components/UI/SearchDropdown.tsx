import Dropdown from "./Dropdown";

type cardsDropdownProps = {
  cards: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  }[];
  setValue: Function;
  setIsInputActive: Function;
};

export default function cardsDropdown({
  cards,
  setValue,
  setIsInputActive,
}: cardsDropdownProps) {
  return (
    <div className="absolute top-14 right-0 w-full">
      <Dropdown className="p-4 w-full">
        {cards.map(({ id, logo, title }) => {
          return (
            <li
              key={id}
              className="flex gap-2 items-center rounded-t h-12 hover:bg-grey320 hover:cursor-pointer"
              onClick={() => {
                console.log(title);
                setValue("");
                setIsInputActive(false);
              }}
            >
              <img src={logo} alt={title} className="w-8 h-8 rounded-lg" />
              <p className="font-semibold text-sm text-black900">{title}</p>
            </li>
          );
        })}
        {cards.length === 0 && <p className="text-sm text-center">Sorry, nothing found</p>}
      </Dropdown>
    </div>
  );
}

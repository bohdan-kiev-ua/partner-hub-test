import IconArrowLeft from "../icons/IconArrowLeft";

export default function ResultsPagination() {
  return (
    <div className="flex justify-center w-full mt-16">
      <div className="flex justify-center w-full sm:w-464px shadow-cardShadow pl-18px pr-18px pt-8px pb-8px rounded-2xl">
        <button type="button" className="group w-8 h-8 mr-auto">
          <IconArrowLeft className="fill-black900 group-hover:fill-blue1000" />
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 mr-6 rounded-full hover:bg-blue1000 hover:text-white"
        >
          1
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 mr-6 rounded-full hover:bg-blue1000 hover:text-white"
        >
          2
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 mr-6 rounded-full hover:bg-blue1000 hover:text-white"
        >
          3
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 mr-6 rounded-full hover:bg-blue1000 hover:text-white"
        >
          4
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 mr-6 rounded-full hover:bg-blue1000 hover:text-white"
        >
          5
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 mr-6 rounded-full hover:bg-blue1000 hover:text-white"
        >
          ...
        </button>
        <button
          type="button"
          className="font-semibold text-sm w-8 h-8 rounded-full hover:bg-blue1000 hover:text-white"
        >
          44
        </button>
        <button
          type="button"
          className="group flex justify-end items-center w-8 h-8 ml-auto"
        >
          <IconArrowLeft className="rotate-180 fill-black900 group-hover:fill-blue1000" />
        </button>
      </div>
    </div>
  );
}

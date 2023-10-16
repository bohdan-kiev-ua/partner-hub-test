"use client";

import useWindowSize from "@/app/hooks/useWindowSize";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Image from "next/image";
import CategoriesButton from "./UI/buttons/CategoriesButton";
import SearchDropdown from "./UI/SearchDropdown";
import CategoriesDropdown from "./UI/CategoriesDropdown";

type TitleSearchProps = {
  value: string;
  onChange: ChangeEventHandler;
  onSubmit: FormEventHandler;
  setValue: Function;
  cards: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  }[];
  isInputActive: boolean;
  setIsInputActive: Function;
};

export default function TitleSearch({
  value,
  onChange,
  onSubmit,
  setValue,
  cards,
  isInputActive,
  setIsInputActive,
}: TitleSearchProps) {
  const windowSize = useWindowSize();
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="group relative flex gap-6 pr-8 lg:p-0">
      <div className="relative group/categories flex items-center">
        <CategoriesButton />
        <CategoriesDropdown
          categories={[
            "Payments",
            "Security",
            "Wellness & Productivity",
            "Cloud-based POS",
            "On Premise POS",
            "Zeller Integrated",
          ]}
        />
      </div>
      <form onSubmit={onSubmit} className="relative">
        <label
          style={
            windowSize.width < 1024
              ? { width: isFocused ? "198px" : "48px" }
              : {}
          }
          className="relative block w-12 lg:w-70 h-12"
        >
          <input
            type="text"
            value={value}
            placeholder={windowSize.width >= 1024 ? "Partner" : ""}
            className="block w-full h-full pl-5 lg:pr-11 pt-6 pb-6 m-0 text-grey550 bg-grey30"
            onChange={onChange}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsFocused(false);
              }, 250);
            }}
          />
          <button
            type="submit"
            style={
              windowSize.width < 1024
                ? {
                    right: isFocused ? 20 : "50%",
                    transform: isFocused ? "translate(0, -50%)" : "",
                    pointerEvents: !isFocused ? "none" : "auto",
                  }
                : {}
            }
            className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-5 flex justify-end items-center h-6"
          >
            <Image src="/search.svg" width={16} height={16} alt="Search" />
          </button>
        </label>
        {isInputActive ? (
          <SearchDropdown
            cards={cards}
            setValue={setValue}
            setIsInputActive={setIsInputActive}
          />
        ) : null}
      </form>
    </div>
  );
}

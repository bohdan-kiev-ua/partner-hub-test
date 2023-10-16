"use client";

import React, { useState } from "react";
import CardElement from "./Cards/CardElement";
import LongArrowLink from "./UI/LongArrowLink";
import TitleSearch from "./TitleSearch";

type ResultsListProps = {
  type?: "hubCategory" | "categoryExpanded";
  cards: {
    id: number;
    title: string;
    description: string;
    logo: string;
    tags: string[];
  }[];
};

export default function ResultsList({
  type = "hubCategory",
  cards,
}: ResultsListProps) {
  const [value, setValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
    setIsInputActive(ev.target.value !== "");
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const input = ev.currentTarget.elements[0] as HTMLInputElement;
    console.log(input.value);
    setIsInputActive(false);
    setValue("");
  };

  return (
    <div className="relative">
      <div
        style={type !== "hubCategory" ? { top: "-354px" } : {}}
        className="absolute -top-70px right-0"
      >
        <TitleSearch
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          setValue={setValue}
          cards={cards.filter(({ title }) =>
            title.toLowerCase().includes(value.toLowerCase().trim()),
          )}
          isInputActive={isInputActive}
          setIsInputActive={setIsInputActive}
        />
      </div>
      <div className="flex justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => {
          return <CardElement key={card.id} data={card} />;
        })}
      </ul>
      </div>
      <div className="flex justify-end pr-6">
        <LongArrowLink
          className="flex-end lg:hidden mt-7"
          text="All POS Integrations"
          href="/"
        />
      </div>
    </div>
  );
}

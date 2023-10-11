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
            title.toLowerCase().includes(value.toLowerCase().trim())
          )}
          isInputActive={isInputActive}
          setIsInputActive={setIsInputActive}
        />
      </div>
      <ul className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => {
          return type === "hubCategory" ? (
            <CardElement
              key={card.id}
              data={card}
              width={{ mobile: "375px", desktop: "404px" }}
              height={{ mobile: "179px", desktop: "176px" }}
            />
          ) : (
            <CardElement
              key={card.id}
              data={card}
              width={{ mobile: "358px", desktop: "380px" }}
              height={{ mobile: "187px", desktop: "187px" }}
            />
          );
        })}
      </ul>
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

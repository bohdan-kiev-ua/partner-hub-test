"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TipsCard from "../Cards/TipsCard";
import LongArrowLink from "../UI/LongArrowLink";
import useWindowSize from "@/app/hooks/useWindowSize";

type LargeCardsSectionProps = {
  title: string;
  link: { href: string; text: string };
  cards: {
    img: string;
    date: string;
    tags: string[];
    title: string;
    description: string;
  }[];
};

export default function LargeCardsSection({
  title,
  link,
  cards,
}: LargeCardsSectionProps) {
  const windowSize = useWindowSize();
  const slickSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "24px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <section>
      <div className="flex flex-col gap-7">
        <h4 className="block font-semibold text-2xl -tracking-0.24px pl-8">
          {title}
        </h4>
        <div className="relative">
          <div className="absolute bottom-0 lg:-top-11 right-8">
            <LongArrowLink text={link.text} href={link.href} />
          </div>
          {windowSize.width <= 376 ? (
            <Slider {...slickSettings}>
              {cards.map(({ img, date, tags, title, description }) => {
                return (
                  <div key={title}>
                    <TipsCard
                      img={img}
                      date={date}
                      tags={tags}
                      title={title}
                      description={description}
                    />
                  </div>
                );
              })}
            </Slider>
          ) : (
            <ul className="flex flex-col items-center lg:flex-row justify-center gap-8">
              {cards.map(({ img, date, tags, title, description }) => {
                return (
                  <li key={title}>
                    <TipsCard
                      img={img}
                      date={date}
                      tags={tags}
                      title={title}
                      description={description}
                    />
                  </li>
                );
              })}
            </ul>
          )}
          <div className="lg:hidden h-52px"></div>
        </div>
      </div>
    </section>
  );
}

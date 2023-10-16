import React from "react";
import MainLayout from "@/app/layouts/MainLayout";
import Breadcrumbs from "@/app/components/UI/Breadcrumbs";
import SidebarCard from "@/app/components/Cards/SidebarCard";
import PostCard from "@/app/components/Cards/PostCard";
import IntegrationCard from "../components/Cards/IntegrationCard";
import LargeCardsSection from "../components/shared/LargeCardsSection";

const tags = ["Zeller Integrated", "Popular"];

const Page = () => {
  return (
    <MainLayout>
      <div className={`mt-24 ml-8 mb-[19px]`}>
        <Breadcrumbs
          breadcrumbs={[
            { href: "/", text: "Zeller Partner Hub" },
            { href: "hub-category", text: "Point of Sale" },
            { href: "single", text: "H&L" },
          ]}
        />
      </div>
      <div
        className={`lg:w-full flex flex-col lg:flex-row justify-center lg:justify-end gap-8 xl:gap-[118px] px-8 lg:px-0`}
      >
        <div className={`w-full md:max-w-[622px]`}>
          <h2
            className={`text-black900 font-inter text-2xl sm:text-32px font-semibold sm:leading-40px tracking-[-0.64px] mb-4 sm:mb-8`}
          >
            H&L
          </h2>
          <div className={`flex gap-4 mb-[17px] sm:mb-8`}>
            {tags.map((tag) => (
              <div
                className={`px-3 flex justify-center items-center rounded-88px bg-grey30 text-blue1000 font-inter font-normal text-12px leading-18px`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            className={`font-Inter font-black900 font-semibold tracking-[-0.24px] text-18px leading-[28px] sm:text-2xl mb-6 sm:mb-4`}
          >
            Exceed POS from H&L provides you with total control over your food
            and beverage operation which now includes Zeller Pay at Table.
          </div>
          <div
            className={`pt-4 pb-2 sm:py-2 px-4 flex flex-col sm:flex-row items-start sm:items-center sm:gap-2 rounded-sm bg-blue50 mb-6`}
          >
            <div
              className={`px-3 flex justify-center items-center rounded-88px bg-blue1000 text-white font-inter font-normal text-12px leading-18px`}
            >
              Special Offer
            </div>
            <div
              className={`text-blue1000 font-Inter font-normal text-sm p-2 sm:p-0`}
            >
              No sign-up fee and 6 months free for Zeller customers.
            </div>
          </div>
          <div className={`h-px w-full bg-grey90 mb-6 hidden lg:block`} />
          <div className={`w-full flex justify-center lg:hidden mb-10`}>
            <SidebarCard />
          </div>
          <h4
            className={`text-black900 font-inter font-semibold tracking-[-0.24px] text-2xl mb-4`}
          >
            About
          </h4>
          <div
            className={`flex flex-col gap-3 font-inter text-black-900 font-normal text-base mb-6`}
          >
            <div>
              H&L’s POS software was designed and developed by hospitality
              professionals, for hospitality professionals. Whether you’re
              running a hotel, pub, restaurant, club, bar, café, or retail
              liquor outlet, H&L’s POS system is designed to manage your
              business from top to bottom, connecting all relevant data and
              information from the front to the back of the house.
            </div>
            <div>
              Zeller Pay at Table is launching exclusively to H&L point-of-sale
              users - and it's free to get started. Learn more here.
            </div>
            <div>
              H&L’s team is full of passionate hospitality experts with decades
              of experience in the industry. It’s what has allowed us to provide
              hospitality point-of-sale systems that always align with the needs
              of an ever-changing industry.
            </div>
            <div>
              H&L's suite of products effectively and efficiently serves the
              following verticals:
            </div>
            <li>
              Hotels and Pubs - H&L’s Hotel & Pub POS system will give you the
              edge you need to stand out in customer service in an ultra
              competitive industry.
            </li>
            <li>
              Restaurants - H&L’s restaurant POS systems are built to easily
              track and manage stock, providing the information you need to make
              decisions on the go, at the click of a button.
            </li>
            <li>
              Bars and Nightclubs - Our POS software is designed to take your
              bar or nightclub service to the next level, so you can focus on
              providing an unforgettable experience to guests.
            </li>
            <li>
              Cafés - Your busy café can rely on our efficient café POS system
              to support, ease, and make your operations run smoother.
            </li>
            <li>
              Liquor and Bottleshops - H&L’s sophisticated stock and inventory
              management systems integrate brilliantly with your POS system,
              giving you the information you need to re-order supplies.
            </li>
            <li>
              Stadiums and Events - Our POS software is designed to take your
              bar or nightclub service to the next level, so you can focus on
              providing an unforgettable experience to guests.
            </li>
          </div>
          <div className={`h-px w-full bg-grey90 mb-6`} />
          <h4
            className={`text-black900 font-inter font-semibold tracking-[-0.24px] text-2xl mb-4`}
          >
            Features
          </h4>
          <div
            className={`flex flex-col gap-3 font-inter text-black-900 font-normal text-base mb-[73px]`}
          >
            <li>
              Hotels and Pubs - H&L’s Hotel & Pub POS system will give you the
              edge you need to stand out in customer service in an ultra
              competitive industry.
            </li>
            <li>
              Restaurants - H&L’s restaurant POS systems are built to easily
              track and manage stock, providing the information you need to make
              decisions on the go, at the click of a button.
            </li>
            <li>
              Bars and Nightclubs - Our POS software is designed to take your
              bar or nightclub service to the next level, so you can focus on
              providing an unforgettable experience to guests.
            </li>
            <li>
              Cafés - Your busy café can rely on our efficient café POS system
              to support, ease, and make your operations run smoother.
            </li>
            <li>
              Liquor and Bottleshops - H&L’s sophisticated stock and inventory
              management systems integrate brilliantly with your POS system,
              giving you the information you need to re-order supplies.
            </li>
            <li>
              Stadiums and Events - Our POS software is designed to take your
              bar or nightclub service to the next level, so you can focus on
              providing an unforgettable experience to guests.
            </li>
            <div>
              H&L works with Australia's leading hospitality groups - Hurley
              Hotel Group, Solotel, ALH Group – supplying their technology
              needs.
            </div>
          </div>
          <div className="mb-16">
            <IntegrationCard />
          </div>
          <div className={`h-px w-full bg-grey90 mt-2 mb-4`} />
        </div>
        <div className={`hidden lg:block pb-20`}>
          <div className={`sticky top-[236px]`}>
            <SidebarCard />
          </div>
        </div>
      </div>
      <LargeCardsSection
        title="Business Tips"
        link={{ href: "/", text: "Zeller Business Blog" }}
        cards={[
          {
            img: "/images/businessTip-1.jpg",
            date: "21.09.2023",
            tags: ["Wellness & Productivity"],
            title: "Interdum pellentesque lacus facilisi convallis suspendisse",
            description:
              "Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.",
          },
          {
            img: "/images/businessTip-2.jpg",
            date: "21.09.2023",
            tags: ["Wellness & Productivity"],
            title: "Interdum pellentesque lacus facilisi convallis suspendisse",
            description:
              "Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.",
          },
          {
            img: "/images/partnerCard-1.jpg",
            date: "21.09.2023",
            tags: ["Wellness & Productivity"],
            title: "Interdum pellentesque lacus facilisi convallis suspendisse",
            description:
              "Auctor ut aliquam, eleifend integer est varius at quam faucibus mi adipiscing convallis condimentum vel malesuada neque eu sit congue suspendisse orci maecenas.",
          },
        ]}
      />
      <div className={`w-full mt-[72px] mb-[80px]`}>
        <PostCard
          backgroundColor="bg-black900"
          backgroundImage="/images/partnerCard-1.jpg"
          title="Build connected solutions for growing businesses as a Zeller Partner."
          description="Partners build integrations and connected solutions enabling merchants to accept payments in more places, reduce administrative burden, and improve operational efficiency. New integrations are regularly featured in the Zeller Partner Hub."
          button={{ text: "Learn more" }}
        />
      </div>
    </MainLayout>
  );
};

export default Page;
